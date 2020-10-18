//case based, for generating markers
import createMarker from './create';
import getLocations from "../../services/getLocations"
import eye from "../../resources/eye.svg"
import MarkerClusterer from '@googlemaps/markerclustererplus';

/* export const markerGenerator =(mapState)=>{
    //creates  random EVS around London
    const markerData = []
    const fastOptions ={
        icon: fastChargerSvg,
        content: "<div>Fast boi is in town! </div>",
        type: "fast"
    }
    const fast = createMarker(mapState,randLocLondon(),fastOptions)
    const standard = createMarker(mapState,randLocLondon(),'standard') //guarantee at least one of each
    markerData.push(fast)
    markerData.push(standard)
    for(let i = 0; i < 8; i++) {
        const type = Math.round(Math.random()-0.2)?fastOptions:'standard' // -0.2 to make standard more likely
        const markerDataPoint = createMarker(mapState,randLocLondon(),type)
        markerData.push(markerDataPoint)
    }
    return markerData;
} */

export const markerGenerator = async (google)=>{
    const locations = await getLocations()

    const markerData = []
    for(const location of locations){
        const content = `
        <h1>${location.name} </h1>
        <img src=${location.image} alt="picuture of location" width="450">
        <div>${location.address}</div>
        `
        const options = {
            icon:eye,
            content,
            type:"London"
        }
        if(location.coordinates){
            const markerDataPoint = createMarker(google,location.coordinates,options)
            markerData.push(markerDataPoint)
        }
    }

    const markers = markerData.map(data => data.marker)
     new MarkerClusterer(google.map, markers,{
        imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
      });
    return markerData;
}