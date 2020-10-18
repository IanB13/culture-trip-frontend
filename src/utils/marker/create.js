import defIcon from "../../resources/defaultIcons/smile.svg"
import {addInfoWindow} from "../../reducers/actions"
import {store} from '../../reducers/store'

/*options, maybe do typeScript for only this file 
options ={
    icon: svg, // Icon svg
    content: html string // for what to put into the information window
    type: string // ID for delete and direction operations
}
*/

const createMarker = (mapState, position, options) => {
    const iconSVG = options.icon?options.icon:defIcon; //uses smile if no default provided
    const content = options.content?options.content:"remember to add content!";
    
    const icon = {
        url: iconSVG,
        scaledSize: new mapState.maps.Size(26, 26), // scaled size
        origin: new mapState.maps.Point(0, 0), // origin
        anchor: new mapState.maps.Point(26/2, 26/2)
      };

    const marker = new mapState.maps.Marker({
        position,
        map: mapState.map, 
        icon
  });

    const clientInfoWindow = new mapState.maps.InfoWindow({
        content
    });



    marker.addListener('click',  () => {
        clientInfoWindow.open(mapState.map, marker);
        //closes old infoWindow when new one is clicked
        const oldInfoWindow = store.getState().infoWindow
        if(oldInfoWindow){
            oldInfoWindow.close()
        }
        store.dispatch(addInfoWindow(clientInfoWindow))
    });

    const type = options.type?options.type:"generic"

    //return is placed into state
    return {
        marker,
        position,
        type
    }
}

export default createMarker