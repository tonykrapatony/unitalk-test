import { FC } from 'react'
import Modal from '@mui/material/Modal'
import { Box } from '@mui/material'

type CustomModalProps = {
  img: string;
  alt: string;
  open: boolean;
  handleClose: (value: string) => void;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const CustomModal: FC<CustomModalProps> = ({ img, open, handleClose, alt }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <img src={img} alt="" />
      </Box>
    </Modal>
  )
}

export default CustomModal