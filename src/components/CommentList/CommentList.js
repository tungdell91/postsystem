import React, { useState, useEffect} from 'react'
import { TableContainer, Table, TableHead, TableCell, TableRow, TableBody, Button, Modal, Box, Typography, Input, TextField} from '@mui/material'
import { Paper } from '@mui/material'
import axios from 'axios';




axios.defaults.headers = {
    'Authorization': 'Bearer 1dc413990299ee6e8618d4eb9c11574a75ed36fcf5194d302a7965724447010a'
}



const CommentList = () => {


        // Button Action
        const [open, setOpen] = useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);
        // Edit Button Action
        const [editOpen, setEditOpen] = useState(false);
        const handleEditOpen = () => setEditOpen(true);
        const handleEditClose = () => setEditOpen(false)




        // Modal Style
        const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
        // Edit Modal Style
        const editStyle = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 500,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          };
        
    
    
    const [posts, setPosts] = useState([])


    //Get data from https://gorest.co.in/public/v1/posts //
    const fetchURL = "https://gorest.co.in/public/v1/posts"
    useEffect(() => {

        const config = {
            headers: { Authorization: `Bearer 1dc413990299ee6e8618d4eb9c11574a75ed36fcf5194d302a7965724447010a` }
        };
        async function fetchData() {
            const data = await axios.get(fetchURL, config)
            // If error, check by console.log(data) to fix   
            setPosts(data.data.data)
        }
        fetchData()
        //put fetchURL here to render once at a time
    }, [fetchURL])
    
    
    //Create a state for input data
    const [inputValue, setInputValue] = useState({
        user_id: "",
        title: "",
        comment: ""
    })
    function handle(e) {
        const newData = {...inputValue}
        newData[e.target.id] = e.target.value
        setInputValue(newData)
        console.log(inputValue)
        
    }

   


    

    return (
        <div>
              <Button onClick ={handleOpen} variant="contained" sx={{marginLeft: "15px", marginBottom: "40px"}}>
                + Add New Post
            </Button>
            {/*Add New User Pop Up Here*/}
            <Modal open={open} onClose={handleClose}>
                <Box sx={editStyle}>
                
                <Typography id="modal-modal-title" variant="h6" component="h2" align='center' color='primary'> Add New post </Typography> 
                <Typography>User ID</Typography>

                <TextField
                    required
                    id="user_id"
                    type="number"
                    onChange={(e) => handle(e)}
                    value={inputValue.user_id}
                       
                    placeholder='User Id'
                    sx={{marginTop:'10px', width: '100%'}}
                />
                <Typography sx={{marginTop: '10px'}}>Title</Typography>
                <TextField
                    required
                    id="title"
                    onChange={(e) => handle(e)}
                    value={inputValue.title}
                    placeholder='Title'
                    sx={{marginTop:'10px', width: '100%'}}
                />
               
                <Typography sx={{marginTop: '10px'}}>
                    Comment
                </Typography>
                <TextField
                    required
                    id="comment"
                    onChange={(e) => handle(e)}
                    value={inputValue.comment}
                    placeholder='Comment'                   
                    sx={{marginTop:'10px', width: '100%'}}
                /> 
                <Button variant='contained' sx={{marginTop: '20px'}}
                    onClick = {(e) => {
                        axios.post(`https://gorest.co.in/public/v1/posts`, {
                            "user_id" : inputValue.user_id,
                            "title": inputValue.title,
                            "body": inputValue.comment
                        }, axios.defaults.headers)
                        .then(res =>
                                            {   
                                               
                                                console.log(res);
                                                console.log(res.data)
                                                window.location.reload()
                                                alert('Post Successfully')
                                             })
                    }}
                
                >
                    Submit
                </Button>
                <Button onClick={handleClose} sx={{marginTop: '20px', float: 'right'}}>Cancel</Button>


         
  
       </Box>
            
        </Modal>
                
            <TableContainer component={Paper}>
                <Table sx={{width: '80%', margin: 'auto'}}>
                    <TableHead>
                        <TableRow sx={{textTransform: 'uppercase', }}>
                         
                            <TableCell>Posts Id</TableCell>    
                            <TableCell>User Id</TableCell>    
                            <TableCell sx={{textAlign: 'center'}}>Title</TableCell>    
                            <TableCell sx={{textAlign: 'center'}}>Comment</TableCell>    
                            <TableCell>Action</TableCell>    
                            
                        </TableRow>

                    </TableHead>
                    <TableBody>
                        {posts.map((post) => 
                        
                            <TableRow key={post.id}>
                                <TableCell>{post.id}</TableCell>
                                <TableCell>{post.user_id}</TableCell>
                                <TableCell>{post.title}</TableCell>
                                <TableCell>{post.body}</TableCell>
                                <TableCell>
                                
                                    <Button onClick={handleEditOpen}>
                                        Edit                                      
                                    </Button>
                                    <Modal open={editOpen} onClose={handleEditClose}>
                <Box sx={style}>
                
                <Typography id="modal-modal-title" variant="h6" component="h2" align='center' color='primary'> Edit Post </Typography> 
                <Typography>User ID</Typography>

                <TextField
                    required
                    id="user_id"
                    type="number"
                    onChange={(e) => handle(e)}
                    value={inputValue.user_id}
                       
                    placeholder='User Id'
                    sx={{marginTop:'10px', width: '100%'}}
                />
                <Typography sx={{marginTop: '10px'}}>Title</Typography>
                <TextField
                    required
                    id="title"
                    onChange={(e) => handle(e)}
                    value={inputValue.title}
                    placeholder='Title'
                    sx={{marginTop:'10px', width: '100%'}}
                />
               
                <Typography sx={{marginTop: '10px'}}>
                    Comment
                </Typography>
                <TextField
                    required
                    id="comment"
                    onChange={(e) => handle(e)}
                    value={inputValue.comment}
                    placeholder='Comment'                   
                    sx={{marginTop:'10px', width: '100%'}}
                /> 
                <Button variant="contained" sx={{marginTop: '20px'}}
                    onClick = {(e) => {
                        axios.put(`https://gorest.co.in/public/v1/posts/${post.id}`, {
                            "user_id" : inputValue.user_id,
                            "title": inputValue.title,
                            "body": inputValue.comment
                        }, axios.defaults.headers)
                        .then(res =>
                                            {   
                                                e.preventDefault();
                                                console.log(res);
                                                console.log(res.data)
                                                alert('Edit Successfully')
                                                window.location.reload()
                                             })
                    }}
                
                >
                    Edit
                </Button>
                <Button onClick={handleEditClose} sx={{marginTop: '20px', float: 'right'}}>Cancel</Button>


         
  
       </Box>
            
        </Modal>    










                                    <Button onClick={(e) => {
                                        if(window.confirm(`Are you sure you want to delete?`)){
                                        axios.delete(`https://gorest.co.in/public/v1/posts/${post.id}`)
                                        .then(res =>
                                            {   
                                                e.preventDefault();
                                                console.log(res);
                                                console.log(res.data)
                                                window.location.reload()
                                             })
                                        }           
                                    }}>
                                        Delete
                                    </Button>
                                  
                                </TableCell>
                            </TableRow>
                        )}
                        
                    </TableBody>
                </Table>


            </TableContainer>
        </div>
    )
}

export default CommentList;
