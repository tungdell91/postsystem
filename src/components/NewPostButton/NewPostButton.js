import React from 'react'
import { Button, Modal, Box, Typography, TextField } from '@mui/material'
import { useState } from 'react';




const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const NewPostButton = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    


    return (
        <div>
            <Button onClick ={handleOpen} variant="contained" sx={{marginLeft: "15px", marginBottom: "40px"}}>
                + Add New Post
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
               
                
            >
                <Box sx={style}>
                <form>
                <Typography id="modal-modal-title" variant="h6" component="h2" align='center' color='primary'>
                    Add New post
                </Typography>
                <Typography>
                    User ID:
                </Typography>
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    
                    sx={{marginTop:'10px', width: '100%'}}
                />
                <Typography sx={{marginTop: '10px'}}>
                    Title
                </Typography>
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Hello World"
                    sx={{marginTop:'10px', width: '100%'}}
                />
               
                <Typography sx={{marginTop: '10px'}}>
                    Comment
                </Typography>
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Hello World"
                    sx={{marginTop:'10px', width: '100%'}}
                />
         
                <Button variant='contained' sx={{float:'left', marginTop:'20px', marginLeft: '10px'}}>
                    Submit
                </Button>
                <Button onClick={handleClose} variant='primary' sx={{float:'right', marginTop:'20px', marginRight: '10px'}}>
                    Cancel
                </Button>
                </form>
                </Box>
            </Modal>
        </div>
    )
}

export default NewPostButton;
