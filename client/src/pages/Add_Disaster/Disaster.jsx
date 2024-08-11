import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import styles from "./Disaster.module.css";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { addDisaster } from "@/http/disasterApi";
import { toastOptions } from "@/config/Toastify";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";


const MapViewUpdater = ({ position }) => {
  const map = useMap();
  if (position) {
    map.setView([position.lat, position.lng], 13); 
  }
  return null;
};

const MapClickHandler = ({ onClick }) => {
  useMapEvents({
    click(event) {
      onClick(event.latlng);
    },
  });
  return null;
};

const MapSelector = ({ setLatitude, setLongitude }) => {
  const [position, setPosition] = useState(null);
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  const handleMapClick = (latlng) => {
    setPosition(latlng);
    setLatitude(latlng.lat);
    setLongitude(latlng.lng);
    setAddress(""); // Clear the search bar when clicking on the map
  };

  const handleSearch = async () => {
    if (address) {
      try {
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/search`,
          {
            params: {
              q: address,
              format: "json",
              limit: 1,
            },
          }
        );
        const data = response.data[0];
        if (data) {
          const { lat, lon } = data;
          const newPosition = { lat: parseFloat(lat), lng: parseFloat(lon) };
          setPosition(newPosition);
          setLatitude(newPosition.lat);
          setLongitude(newPosition.lng);
        } else {
          setError("Location not found");
        }
      } catch (err) {
        setError("Error fetching location");
      }
    }
  };

  const navigate = useNavigate('');

  const { role } = useSelector(
    (state) => state.auth
  );

  useEffect(()=>{

    if(role!='admin'){
      toast.error("You require admin role to create disaster alerts", toastOptions);
      navigate('/')
    }

  },[role,navigate])

  return (
    <div style={{ height: "500px", width: "100%" }}>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MapClickHandler onClick={handleMapClick} />
        <MapViewUpdater position={position} />
        {position && (
          <Marker position={position}>
            <Popup>
              Latitude: {position.lat.toFixed(5)}, Longitude:{" "}
              {position.lng.toFixed(5)}
            </Popup>
          </Marker>
        )}
      </MapContainer>
      <div className="mt-2">
        <div className="flex gap-4">
          <Input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Search for a location"
          />
          <Button onClick={handleSearch}>Search</Button>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
};

const Disaster = () => {
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(null);
  const [eventType, setEventType] = useState("");

  const navigate = useNavigate();
 
  const addDisastermutation = useMutation({
    mutationFn: addDisaster,
    onSuccess: () => {
      toast.success("Disaster Alert Created!", toastOptions);
      navigate("/disaster-map");
    },
    onError: (error) => {
      const errResponse = error.response?.data;
      toast.error(errResponse.message, toastOptions);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const disasterData = {
      eventType,
      dateTime: date,
      title,
      description,
      coordinates: {
        lat: latitude,
        lon: longitude,
      },
    };

    addDisastermutation.mutate(disasterData)
  };

  return (
    <div className={styles.container}>
      <div className={styles.map_container}>
        <MapSelector setLatitude={setLatitude} setLongitude={setLongitude} />
      </div>

      <div className={styles.form_container}>
        <div className="text-center p-5">
        <h3 className="text-center text-3xl font-bold dark:text-white">Add Disaster Info</h3>
   
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>

          <div className={styles.form_group}>
            <div className="flex justify-evenly">
              <span className="flex gap-2">
                {" "}
                <Label>Longitude:</Label>
                <p>{longitude}</p>
              </span>
              <span className="flex gap-2">
                {" "}
                <Label>Latitude:</Label>
                <p>{latitude}</p>
              </span>
            </div>
          </div>

          <div className={styles.form_group}>
            <Label htmlFor="title">Title:</Label>
            <Input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title"
              required
            />
          </div>

          <div className={styles.form_group}>
            <Label>Event Type:</Label>
            <Select onValueChange={setEventType}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Event Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Event Type</SelectLabel>
                  <SelectItem value="earthquake">Earthquake</SelectItem>
                  <SelectItem value="flood">Flood</SelectItem>
                  <SelectItem value="tornado">Tornado</SelectItem>
                  <SelectItem value="wildfire">Wildfire</SelectItem>
                  <SelectItem value="hurricane">Hurricane</SelectItem>
                  <SelectItem value="volcanic eruption">
                    Volcanic Eruption
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className={styles.form_group}>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className={styles.form_group}>
            <Label htmlFor="description">Description:</Label>
            <Textarea
              placeholder="Type your description here."
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <p className="text-sm text-muted-foreground">
              Your alert will be visible to the users.
            </p>
          </div>

          <div className={styles.submit_button}>
            <Button variant="secondary" type="submit">
              Create Alert
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Disaster;
