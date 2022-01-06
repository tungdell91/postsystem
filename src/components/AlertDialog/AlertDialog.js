import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios'
import { useState } from 'react';

import DeleteIcon from "@mui/icons-material/Delete";


axios.defaults.headers = {
  Authorization:
    "Bearer 1dc413990299ee6e8618d4eb9c11574a75ed36fcf5194d302a7965724447010a",
};


const  AlertDialog = () => {
  const [open, setOpen] = React.useState(false);
  
  //Handle First Click
  const handleClickOpen = (record) => {
    setRecordData(record)
    setOpen(true);
    setInputValue({
      id: record.id,
      user_id: record.user_id,
      title: record.title,
      body: record.body,
    });
  };
  const [recordData, setRecordData] = useState(null)
  const [inputValue,setInputValue] = useState({
    id: "",
    user_id: "",
    title: "",
    body: ""
  })
  const handleClose = () => {
    setOpen(false);
  };
 
  const handleDelete = () => {
    if(recordData) {
      axios.delete(`https://gorest.co.in/public/v1/posts/${inputValue.id}`,
      axios.defaults.headers
      )
    }
  }
 

  



  return (
    <div>
      <Button onClick={() => handleClickOpen()} sx={{display: 'inline', float: 'left'}}>
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
          


                    
            <Button onClick={handleDelete}> Agree</Button>
        
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default AlertDialog;