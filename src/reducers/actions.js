import {store} from './store'
import {googleApiKey, googleMapsOptions} from "../utils/config"
import GoogleMapsApiLoader from "google-maps-api-loader";
import {markerGenerator} from '../utils/marker/generate'

//Loading sequence to start, creates map and sets markers
export const googleFinishedLoading  = (mapRef) => async (dispatch) =>{
    await dispatch(initMap(mapRef))
    const initGoogle = store.getState().google
    await dispatch(initalizeMarkers(initGoogle))
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


export const initalizeMarkers =(google) =>{
    return  async dispatch => {
        const data = await markerGenerator(google)
        dispatch({
            type: 'INIT_MARKERS',
            data
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