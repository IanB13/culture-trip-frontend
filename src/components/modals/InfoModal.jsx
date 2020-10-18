//simple modal that displays info in modal when button clicked
import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

function InfoModal({x,y}) {
  const [open, setOpen] = React.useState(false)
  
  //default button postion
  x = x?x:12
  y = y?y:12

  const buttonStyle ={
    "display": "block",
    "position": "absolute",
    "left": `${x}px`,
    "top": `${y}px`,
    "marginRight": "0px"
  }

  return (
    <Modal
      closeIcon
      open={open}
      size = 'tiny' 
      trigger={<Button style ={buttonStyle} className = "black" id = "infoModalButton"> Info </Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Modal.Content>
        <p>
          This web app uses data that was scraped from{" "}
          <a href="https://theculturetrip.com/">
            culture trips website
          </a>
          .
          The locations were placed on the map using the experiences start address and generating a
          coordinate point from them using the google maps locations api.
        </p>
        <p>
          Frontend code avalible{" "}
          <a href = "https://github.com/IanB13/culture-trip-frontend">here</a>
        </p>
        <p>
          Backend code avalible{" "}
          <a href = "https://github.com/IanB13/culture-trip-backend">here</a>
        </p>
        <p>
          Icons made by{" "}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
            </a>
          {" "}from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
            </a>
            .
        </p>
      </Modal.Content>
    </Modal>
  )
}

export default InfoModal
