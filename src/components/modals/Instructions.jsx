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
          <List.Item as='li'>This web app displays experiences in England</List.Item>
          <List.Item as='li'>Experiences were generated from culture trips website</List.Item>
          <List.Item as='li'>For more info go{" "}
           <a href ="https://theculturetrip.com/europe/united-kingdom/england/london/experiences/">
             here
           </a>
           </List.Item>
        </List>
      </Modal.Content>
    </Modal>
  )
}

export default InfoModal