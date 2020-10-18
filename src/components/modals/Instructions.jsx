//simple modal that pops up on start then never again
import React from 'react'
import { Modal, List} from 'semantic-ui-react'


const InfoModal = () => {
  const [open, setOpen] = React.useState(true)
  return (
    <Modal
      closeIcon
      open={open}
      size = 'tiny' 
      onClose={() => setOpen(false)}
    >
      <Modal.Content>
        <List as='ul'>
          <List.Item as='li'>This web app displays experiences in England generated from the Culture Trip website.</List.Item>
          <List.Item as='li'>        
          Click{" "}
           <a href ="https://theculturetrip.com/europe/united-kingdom/england/london/experiences/">
             here
           </a>
           {" "}for more information.
           </List.Item>
        </List>
      </Modal.Content>
    </Modal>
  )
}

export default InfoModal