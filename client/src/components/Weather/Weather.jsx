import React from 'react'
import styles from './Weather.module.css';
import { FaLocationDot } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";




const Weather = () => {
  return (
    <>
    <div className = {styles.main_container}>
        <div className = {styles.title_container}>
        <div className = {styles.change_box}>
            <button className = {styles.change_to_degree} disabled> °C </button> 
            <button className = {styles.change_to_farheneit}> f</button>
       </div>
    </div>
    
    <div className = {styles.container}>
        <div className = {styles.left_container}>
            <div className = {styles.search_inp} >
                <div className = {styles.locate_input}>
                <FaLocationDot fontSize={20} style={{ marginLeft: '10px' }} />

                    <input type="text" placeholder = "Enter your city" className = {styles.search_input} />
                </div>
                <button className = {styles.searchButton}> <FaMagnifyingGlass fontSize={24} style = {{marginLeft: '8px'}} /> </button>
            </div>

            <div className = {styles.left_current_weather}>
            <div className = {styles.temp_with_icon} >
                <div> <img src="./Animations/Animation _ Thunder.gif" alt="forecast_image" className = {styles.animate_weather_condition} /></div>
               <div className = {styles.temp_right}>
                <h2 className = {styles.temp} > 28°C </h2>
                <h2 className = {styles.weather} > Rainy Day </h2>
            </div>
            </div>   
            <h1 className = {styles.city_name}> Bengaluru </h1>
            <h2 className = {styles.time}> 2:23:09 PM </h2>
        </div>
           
        <div className = {styles.outer_box}>
    <div className = {styles.upper_box}>
        <div className = {`${styles.box1} ${styles.box}`}>
            <p className = {`${styles.box_heading}`}>
                 FEELS LIKE
            </p>
            <hr className = {styles.box_hr} />
            <div className = {styles.details_of_four}>
                <h1 className = {styles.feel}> 28°C </h1>
                <p className = {styles.four_box_desc}> Humidity is making it feel warmer</p>
            </div>
        </div>

        <div className = {`${styles.box2} ${styles.box}`}>
            <p className = {`${styles.box_heading}`}>
                <i className = "fa_solid fa_droplet"></i> PRECIPITATION
            </p>
            <hr className = {styles.box_hr} />
            <div className = {styles.details_of_four}>
                <h1 className = {styles.precipitation}> 2.3'' </h1>
                <p className = {styles.four_box_desc}> In last 24 hours </p>
            </div>
        </div>
    </div>

    <div className = {styles.lower_box}>
        <div className = {`${styles.box3} ${styles.box}`}>
            <p className = {`${styles.box_heading}`}>
                <i className = "fa_regular fa_eye"></i> VISIBILITY
            </p>
            <hr className = {styles.box_hr} />
            <div className = {styles.details_of_four}>
                <h1 className = {styles.visibility}> 6 mi </h1>
                <p className = {styles.four_box_desc}> Visibility </p>
            </div>
        </div>

        <div className = {`${styles.box4} ${styles.box}`}>
            <p className = {`${styles.box_heading}`}>
                <i className = "fa_solid fa_water"></i> HUMIDITY
            </p>
            <hr className = {styles.box_hr} />
            <div className = {styles.details_of_four}>
                <h1 className = {styles.humidity}> 82% </h1>
                <p className = {styles.four_box_desc}> The dew point is 25° right now </p>
            </div>
        </div>
    </div>
</div>

      </div>

      <div className={styles.right_container}>
    <div className={styles.hourly_container}>
        <div className={styles.hourly_content}>
            <p className={styles.right_box_heading}>
                <i className="fa_solid fa_hourglass_start"></i> HOURLY FORECAST
            </p>
            <hr className={styles.right_line_box} />
        </div>
        <div className={styles.full_hourly}>
            <div className={styles.hourly_details}>
                <p className={styles.hourly_desc}> 4:00</p>
                <h2 className={styles.hourly_temp}> 28°C </h2>
                <i className="fas fa_camera styles.hourly_img"></i>
            </div>
            <div className={styles.hourly_details}>
                <p className={styles.hourly_desc}> 4:00</p>
                <h2 className={styles.hourly_temp}> 28°C </h2>
                <i className="fas fa_camera styles.hourly_img"></i>
            </div>
            <div className={styles.hourly_details}>
                <p className={styles.hourly_desc}> 4:00</p>
                <h2 className={styles.hourly_temp}> 28°C </h2>
                <i className="fas fa_camera styles.hourly_img"></i>
            </div>
            <div className={styles.hourly_details}>
                <p className={styles.hourly_desc}> 4:00</p>
                <h2 className={styles.hourly_temp}> 28°C </h2>
                <i className="fas fa_camera styles.hourly_img"></i>
            </div>
            <div className={styles.hourly_details}>
                <p className={styles.hourly_desc}> 4:00</p>
                <h2 className={styles.hourly_temp}> 28°C </h2>
                <i className="fas fa_camera styles.hourly_img"></i>
            </div>
            <div className={styles.hourly_details}>
                <p className={styles.hourly_desc}> 4:00</p>
                <h2 className={styles.hourly_temp}> 28°C </h2>
                <i className="fas fa_camera styles.hourly_img"></i>
            </div>
        </div>
    </div>

    <div className={styles.day_forecast}>
        <div className={styles.daily_content}>
            <p className={styles.right_box_heading}>
                <i className="fa_solid fa_calendar_days"></i> 10 DAY FORECAST
            </p>
            <hr className={styles.right_line_box} />
        </div>
        <div className={styles.full_daily}></div>
    </div>

    <div className={styles.wind_index}>
        <div className={styles.uv_index}>
            <p className={styles.right_box_heading}>
                <i className="fa_solid fa_temperature_three_quarters"></i> UV INDEX
            </p>
            <hr className={styles.right_line_box} />
            <div className={styles.uv_box}>
                <h2 className={styles.uv_number}> 3 </h2>
                <p className={styles.uv_condition}> Moderate</p>
                <input type="range" min="1" max="11" className={styles.slider} id="myRange" disabled />
            </div>
        </div>

        <div className={styles.wind_speed}>
            <img src="/Images/wwweee.jpg" alt="" />
            <p className={styles.right_box_heading}> WIND</p>
            <h2 className={styles.wind_mph}> 3 MPH wind</h2>
            <hr className={styles.right_line_box} />
            <h2 className={styles.gusts_mph}> 3 MPH Gusts</h2>
        </div>
    </div>
</div>
        </div>
        </div>
    </>
  )
}

export default Weather;
