import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { useState } from 'react';

import DeleteIcon from "@mui/icons-material/Delete";




const  AlertDialog = () => {
  const [open, setOpen] = React.useState(false);
  

  const handleClickOpen = () => {
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [posts, setPosts] = useState([]);



  return (
    <div>
      <Button onClick={handleClickOpen} sx={{display: 'inline', float: 'left'}}>
        <DeleteIcon />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete posts ?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure to delete this post ? This can be undone
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          


                    
            <Button onclick={handleClose}>Agree</Button>
        
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default AlertDialog;