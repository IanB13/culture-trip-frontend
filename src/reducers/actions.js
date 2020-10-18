import {store} from './store'
import {googleApiKey, googleMapsOptions} from "../utils/config"
import GoogleMapsApiLoader from "google-maps-api-loader";
import {markerGenerator} from '../utils/marker/generate'

//Loading sequence to start, creates map and sets markers
export const googleFinishedLoading  = (mapRef) => async (dispatch) =>{
    await dispatch(initMap(mapRef))
    const initGoogle = store.getState().google
    await dispatch(initalizeMarkers(initGoogle))
    await dispatch(initDirectionsRender(initGoogle))
  }

//Creates google map
export const initMap = (mapRef) =>{
    return async dispatch => {
        const google = await GoogleMapsApiLoader({ apiKey: googleApiKey })
        const map = new google.maps.Map(mapRef.current, googleMapsOptions)
        dispatch({
            type: 'INIT_MAP',
            data:{
                map,
                maps:google.maps,
                loading:false,
            }
        })
    }
}

//initilized directions render, should add some options
export const initDirectionsRender = (google) =>{
    return async dispatch => {
        const directionsRenderer = new google.maps.DirectionsRenderer();
        directionsRenderer.setMap(google.map);
        dispatch({
            type: 'INIT_DIRECTIONS_RENDERER',
            data:{
                ...google,
                directionsRenderer
            }
        })
    }
}


export const initalizeMarkers =(google) =>{
    return  async dispatch => {
        const data = await markerGenerator(google)
        dispatch({
            type: 'INIT_MARKERS',
            data
        })
    }
}

//TODO: get rid of not generic
export const addHome = (markerData) =>{
    return  dispatch => {
        dispatch({
            type: 'ADD_HOME_LOCATION',
            data: {...markerData},
        })
    }

}
//TODO: get rid of not generic
export const addWork = (markerData) => {
    return  dispatch => {
        dispatch({
            type: 'ADD_WORK_LOCATION',
            data: {...markerData},
        })
    }

}

export const addInfoWindow = (infoWindow) => {
    return  dispatch => {
        dispatch({
            type: 'OPEN_INFOWINDOW',
            data: infoWindow
        })
    }
}