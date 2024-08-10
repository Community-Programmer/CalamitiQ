import React, { useState } from 'react'
import styles from './Disaster.module.css';
import MapSelector from '@/components/MapSelector/MapSelector';
import { Textarea } from "@/components/ui/textarea"
import { Label } from '@radix-ui/react-dropdown-menu';
import { Button } from '@/components/ui/button';
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar";
import { IoSearch } from "react-icons/io5";



import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  


const Disaster = () => {
    const [city, setCity] = useState('');
    const [longitude, setLongitude] = useState('');
    const [latitude, setLatitude] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('City:', city);
      console.log('Longitude:', longitude);
      console.log('Latitude:', latitude);
      console.log('Title:', title);
      console.log('Description:', description);
    };
    
    const [date, setDate] = React.useState()
  return (
 
    <>
    <div className = {styles.search_btn}>
        <input type = "text" placeholder = 'Enter Location... '  />
        <IoSearch fontSize={24}/>
        
    </div>
    <div className = {styles.main_container} >

    <div className = {styles.left_container} >  

    <MapSelector  />
    </div>

    <div className = {styles.right_container} >

        <div style = {{textAlign : "center", padding: '5px' }}>
            <h1 className = {styles.headline} > Add Disaster Info </h1>
        </div>

    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <div className={ styles.city}>
        <label htmlFor="city"> Enter the city: </label>
        <input
          style = {{width: '65%', padding: '5px'}}
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          required
        />
      </div>


      <div className= {styles.latlong}>
        <label>Longitude: {longitude}</label>
        <label style={{ marginLeft: '20px' }}>Latitude: {latitude}</label>
      </div>

      <div className = {styles.title}>
        <label htmlFor="title">Title: </label>
        <input
         style = {{width: '80%', padding: '5px'}}
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
          required
        />
      </div>

      <div className = {styles.select_menu}>
        <label htmlFor=""> Event Type: </label>
        <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Event Type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
      </div>

      <div className = {styles.date_time}>
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

      <div className="grid w-full gap-1.5">
      <Label htmlFor="message-2"> Description </Label>
      <Textarea placeholder="Type your message here." id="message-2" />
      <p className="text-sm text-muted-foreground">
        Your message will be copied to the support team.
      </p>
    </div>
     <div className = {styles.submit}>
     <Button variant="secondary"> Submit </Button>
     </div>
  
    </form>

    </div>
    
    </div>
    </>
  )
}

export default Disaster
