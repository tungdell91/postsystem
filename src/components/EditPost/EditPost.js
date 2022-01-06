import React, { useState } from "react";
import axios from "axios";
import { Box } from "@mui/system";
import { Modal, Typography, Button, TextField, Container } from "@mui/material";
//Authorize token to POST request
axios.defaults.headers = {
  Authorization:
    "Bearer 1dc413990299ee6e8618d4eb9c11574a75ed36fcf5194d302a7965724447010a",
};

const EditPost = () => {
  

  // Declare states for this Button
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    clearData();

    setOpen(false);
  };

  // Input Data State
  const [inputValue, setInputValue] = useState({
    user_id: "",
    title: "",
    body: "",
  });

  // Clear the input data:
  const clearData = () => {
    setInputValue({
        user_id: "",
        title: "",
        body: "",
      });
  }

  // CSS for Modal:
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "#fff",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  // Reload API actions :
  async function makeGetRequest() {
    let res = await axios.get("https://gorest.co.in/public/v1/posts");

    let data = res.data;
    console.log(data);
  }

  // Add Button Action :
  // onChange action
  const handleChange = (e) => {
    const newData = { ...inputValue };
    newData[e.target.id] = e.target.value;
    setInputValue(newData);
  };

  return (
    <Container component={Box}>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{ marginLeft: "15px", marginBottom: "40px" }}
      >
        Edit Post
      </Button>
      {/*Add New User Pop Up Here*/}
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            align="center"
            color="primary"
          >
            {" "}
            Edit post{" "}
          </Typography>
          <Typography>User ID</Typography>

          <TextField
            required
            id="user_id"
            type="number"
            onChange={(e) => handleChange(e)}
            value={inputValue.user_id}
            placeholder="User Id"
            sx={{ marginTop: "10px", width: "100%" }}
          />
          <Typography sx={{ marginTop: "10px" }}>Title</Typography>
          <TextField
            required
            id="title"
            onChange={(e) => handleChange(e)}
            value={inputValue.title}
            placeholder="Title"
            sx={{ marginTop: "10px", width: "100%" }}
          />

          <Typography sx={{ marginTop: "10px" }}>Body</Typography>
          <TextField
            required
            id="body"
            onChange={(e) => handleChange(e)}
            value={inputValue.body}
            placeholder="body"
            sx={{ marginTop: "10px", width: "100%" }}
          />
          <Button
            variant="contained"
            sx={{ marginTop: "20px" }}
            onClick={(e) => {
              axios
                .put(
                  `https://gorest.co.in/public/v1/posts`,
                  {
                    user_id: inputValue.user_id,
                    title: inputValue.title,
                    body: inputValue.body,
                  },
                  axios.defaults.headers
                )
                .then((res) => {
                  setOpen(false);

                  makeGetRequest();
                  clearData();  
                });
            }}
          >
            Edit
          </Button>
          <Button
            onClick={handleClose}
            sx={{ marginTop: "20px", float: "right" }}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
    </Container>
  );
};

export default EditPost;
