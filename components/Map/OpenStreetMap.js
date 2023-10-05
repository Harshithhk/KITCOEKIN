import React, { useState, useRef, useEffect } from 'react'
import { MapContainer, TileLayer, Marker ,Popup ,useMap} from 'react-leaflet'
// import 'leaflet/dist/leaflet.css'
import { OpenStreetMapProvider, GeoSearchControl } from 'leaflet-geosearch'
import 'leaflet-geosearch/dist/geosearch.css';
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.js';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';

const customProviderAlumni = (alumniList,setFilterQuery) => {
  return {
    search: async (query) => {
      try {
        
        // Implement the search logic for your custom provider
        // Perform filtering based on the AlumniList
        const filteredList = alumniList.filter((alumni) =>
          alumni.current_address.display_name.toLowerCase().includes(query.query.toLowerCase())
        );        
        // setFilterQuery(query.query)
        // Process the filteredList and return the search results
        const searchResults = filteredList.map((alumni) => ({
          label: alumni.current_address.display_name,
          x: alumni.current_address.lon,
          y: alumni.current_address.lat,
        }));
        return searchResults;
      } catch (error) {
        console.error('Error occurred during search:', error);
        return [];
      }
    },
  };
};
const customProviderMarker = (alumniList,setFilterQuery) => {
  return {
    search: async (query) => {
      try {

        // Implement the search logic for your custom provider
        // Perform filtering based on the AlumniList
        const filteredList = alumniList.filter((alumni) =>
          alumni.current_address.display_name.toLowerCase().includes(query.query.toLowerCase())
        );        
        setFilterQuery(query.query)
        // Process the filteredList and return the search results
        const searchResults = filteredList.map((alumni) => ({
          label: '',
          x: '',
          y: '',
        }));
        return searchResults;
      } catch (error) {
        console.error('Error occurred during search:', error);
        return [];
      }
    },
  };
};


// make new leaflet element
const SearchAlumni = (props) => {
  const map = useMap() // access to leaflet map
  const { provider } = props

  useEffect(() => {
      const searchControl = new GeoSearchControl({
          provider,
          style: 'button',
          showMarker:false,
          showPopup:false,
          autoClose:true,
          retainZoomLevel:false,
          animateZoom:true,
          keepResult:true,
          searchLabel:"Enter address, place, city, country ",
          notFoundMessage:"Alumni not found",
          messageHideDelay:2000,
          animateZoomOptions: {duration: 500 }
      })
      map.addControl(searchControl) // this is how you add a control in vanilla leaflet
      return () => map.removeControl(searchControl)
  }, [props])

  return null // don't want anything to show up from this comp
}

const SearchMarker = ({provider,setFilterQuery}) => {
  const map = useMap() // access to leaflet map

  useEffect(() => {
      const searchControl = new GeoSearchControl({
          provider,
          style: 'bar',
          showMarker:false,
          showPopup:false,
          resultFormat: ({ result }) => result.label, 
          autoClose:true,
          retainZoomLevel:true,
          animateZoom:true,
          keepResult:false,
          searchLabel:"Enter Country, City or State ",
          notFoundMessage:"Alumni not found",
          messageHideDelay:2000,
          animateZoomOptions: {duration: 500 }
      })
      const resetButton = searchControl.resetButton;

// Add click event listener to the reset button
resetButton.addEventListener('click', () => {
  const searchInput = searchControl.searchElement.input;
  setFilterQuery("")
});
const searchInput = searchControl.searchElement.input;

// Add input event listener to the search input
searchInput.addEventListener('input', () => {
  const searchInput = searchControl.searchElement.input;
  searchInput.value.length < 1 ? setFilterQuery("") : null
});

searchInput.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) { // Check if Enter key was pressed
    event.preventDefault(); // Prevent form submission or page refresh
  }
});


      map.addControl(searchControl) // this is how you add a control in vanilla leaflet
      return () => map.removeControl(searchControl)
  }, [])

  return null // don't want anything to show up from this comp
}

const Map2 = (props) => {
  const [center, setCenter] = useState({ lat: 30.043477, lng: 4.668205 })
  // const ZOOM_LEVEL = 13
  const ZOOM_LEVEL = 2.5
  const mapRef = useRef()
  const position = [51.505, -0.09]
  let AlumniList = props.AlumniList
  const [filterQuery, setFilterQuery] = useState('');


  useEffect (() => {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;
    }, []);

  return (
    
    <>
      <div className='  '>
        <div className=' '>
          
          
          <MapContainer center={center} scrollWheelZoom={true}  fullscreenControl={true} zoom={ZOOM_LEVEL} ref={mapRef} style={{ height: "400px" ,borderRadius:"20px"}}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
               {AlumniList.filter((item) =>
                    item.current_address.display_name.toLowerCase().includes(filterQuery.toLowerCase())
                  ).map((item, index) => {
                    let alumniPosition = [
                      item.current_address.lat,
                      item.current_address.lon,
                    ];
                          return(
                          <Marker position={alumniPosition} >
                                <Popup  >
                                  <div>
                                    <h2 className='flex items-center justify-start gap-x-2 '>
                                    <img src={item.photoUrl || "images/awatar.png"} className='w-10 h-10 rounded-full ' alt="Marker Image" />
                                    <span className='font-bold text-black'>{item.name.first_name} {item.name.last_name}</span></h2>
                                    <div><span className='font-bold text-black'>Branch :</span> {item.branch}</div>
                                    <div><span className='font-bold text-black'>Pass out Year :</span> {item.pass_out_year}</div>
                                    <div><span className='font-bold text-black'>Company :</span> {item.company}</div>
                                  
                                  </div>
                              </Popup>
                          </Marker>)
                    })}
            <SearchAlumni provider={customProviderAlumni(props.AlumniList, setFilterQuery)} />

            <SearchMarker provider={customProviderMarker(props.AlumniList, setFilterQuery)} setFilterQuery ={setFilterQuery}  />

              </MapContainer>
        </div>
       
      </div>
    </>
  )
}

export default Map2
