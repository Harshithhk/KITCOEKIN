import React, { useState, useRef, useEffect } from 'react'
import { MapContainer, TileLayer, Marker ,Popup } from 'react-leaflet'
// import 'leaflet/dist/leaflet.css'
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.js';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';



const Map2 = (props) => {
  const [center, setCenter] = useState({ lat: 30.043477, lng: 4.668205 })
  // const ZOOM_LEVEL = 13
  const ZOOM_LEVEL = 2.5
  const mapRef = useRef()
  const position = [51.505, -0.09]
  let AlumniList = props.AlumniList

  useEffect (() => {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;
    }, []);

  return (
    
    <>
      <div className='container '>
        <div className='container'>
          
          
          <MapContainer center={center} scrollWheelZoom={true}  fullscreenControl={true} zoom={ZOOM_LEVEL} ref={mapRef} style={{ height: "400px" ,borderRadius:"20px"}}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
              {AlumniList.map((item,index)=>{
                  let alumniPosition = [item.current_address.lat,item.current_address.lon]
                return(<Marker position={alumniPosition} >
                  <Popup  >
              <div>
                <h2 className='flex items-center justify-center'> <img src="images/awatar.png" className='w-10' alt="Marker Image" />{item.name.first_name} {item.name.last_name}</h2>
                <p> Branch : {item.branch}</p>
                <p>Year : {item.pass_out_year}</p>
                <p>Company : {item.company}</p>
               
              </div>
            </Popup>
        </Marker>)
              })}
   
              </MapContainer>
        </div>
       
      </div>
    </>
  )
}

export default Map2
