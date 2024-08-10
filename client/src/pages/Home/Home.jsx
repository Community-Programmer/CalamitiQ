import React, { useEffect } from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Earth from "../../../public/Earth";
import { useState } from "react";
import ChatBot from "@/components/ChatBot/ChatBot";
import bot from "../../assets/chatbot.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";

const Home = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [disasterInfo, setDisasterInfo] = useState([]);
  const [locationError, setLocationError] = useState(null);

  useEffect(() => {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const targetUrl = "https://api.ambeedata.com/disasters/latest/by-lat-lng";

    const fetchDisasterInfo = async (lat, lng) => {
      try {
        const response = await axios.get(proxyUrl + targetUrl, {
          params: {
            lat: lat,
            lng: lng,
            limit: 1,
            page: 1,
          },
          headers: {
            "x-api-key":
              "",
            "Content-type": "application/json",
          },
        });
        console.log(response.data);
        if (response.data.result && response.data.result.length > 0) {
          setDisasterInfo(response.data.result);
        } else {
          setDisasterInfo(null);
        }
      } catch (error) {
        console.error("Error fetching disaster information:", error);
      }
    };

    const handleLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchDisasterInfo(latitude, longitude);
          },
          (error) => {
            setLocationError("Unable to retrieve your location");
            console.error("Error getting location:", error);
          }
        );
      } else {
        setLocationError("Geolocation is not supported by this browser.");
      }
    };

    handleLocation();
  }, []);

  return (
    <>
      <div className="w-full lg:grid lg:min-h-[400px] lg:grid-cols-2 xl:min-h-[600px] ">
        <div className="flex items-center justify-center py-12">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid text-center gap-5">
              <h1 className="text-4xl font-bold">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </h1>
              <p className="text-balance text-muted-foreground">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint,
                odit aliquid adipisci vero, voluptates et repellendus aspernatur
                similique illo quis nesciunt, totam dolorem iusto rem facere
                fuga itaque dolores delectus!
              </p>
            </div>
            <Button className="w-full gap-4">
              <Link href="disaster-map">Disaster Map</Link>
              <FaArrowRight />
            </Button>
          </div>
        </div>
        <div className=" lg:block">
          <div className="items-center flex h-full">
            <Canvas
              style={{ height: "450px" }}
              frameloop="demand"
              camera={{ position: [-4, 3, 6], fov: 45, near: 0.1, far: 300 }}
            >
              <ambientLight intensity="2" />
              <OrbitControls enableZoom={false} autoRotate />
              <Suspense fallback={null}>
                <Earth scale={2} />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>

      <div className="chatBotBtn">
        <button onClick={() => setShowChatbot(!showChatbot)}>
          <img src={bot} alt="bot" />
        </button>
      </div>
      {showChatbot && <ChatBot />}

      <div className="flex gap-4 items-center justify-center">
        <h4 className="text-center text-2xl font-bold dark:text-white">
          Natural Disasters in your Area
        </h4>
        <span className="live">
          <span>🟢</span>Live
        </span>
      </div>

      {disasterInfo ? (
        <div className="flex flex-wrap p-5"> 
         {disasterInfo.map((disaster)=>(
          <div key={disaster.event_id} className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto my-4">
                 <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                   {disaster.event_name}
                 </h2>
                 <p className="text-gray-600 mb-1">
                   <strong>Type:</strong> {disaster.event_type}
                 </p>
                 <p className="text-gray-600 mb-1">
                   <strong>Date:</strong>{" "}
                   {new Date(disaster.date).toLocaleString()}
                 </p>
                 <p className="text-gray-600 mb-1">
                   <strong>Location:</strong> Latitude {disaster.lat}, Longitude{" "}
                   {disaster.lng}
                 </p>
               </div>
         ))}


      </div>
      ) : (
        <div className="noDisaster">
          <p className="text-center mt-5">No recent disasters reported near your location.</p>
        </div>
      )}

      {locationError && (
        <div className="locationError">
          <p>{locationError}</p>
        </div>
      )}
    </>
  );
};

export default Home;
