import React from 'react';
import Modal from '@material-ui/core/Modal';


export default function ImageModal({url}) {
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log(url)

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Open Picture
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <img src={url} alt="we failed"/>
      </Modal>
    </div>
  );
}

