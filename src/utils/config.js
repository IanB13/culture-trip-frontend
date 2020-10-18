//Config files, single location for changable items

//Google maps API key 
export const googleApiKey = process.env.REACT_APP_GOOGLE_MAPS_API;

// google.maps.MapOptions interface
// more info here: https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions
export const googleMapsOptions = {
    zoom: 6.79,
    center: {
        lat: 52.2085547,
        lng:  -2.3618748
    },
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeControl: false,
}