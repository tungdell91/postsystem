import React from "react";
import {
  Pagination,
  Button,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  CssBaseline,
  Container,
  Grid,
  Box,
  TableCell,
  TableRow,
  Typography,
  Modal,
  TextField,
} from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Avatar from "@mui/material/Avatar";
import { deepPurple, deepOrange } from "@mui/material/colors";

const PaginationTest = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [editOpen, setEditOpen] = useState(false);
  const [recordData, setRecordData] = useState(null);
  const [inputValue, setInputValue] = useState({
    user_id: "",
    title: "",
    body: "",
  });

  const fetchData = async () => {
    const data = await axios.get(
      "https://gorest.co.in/public/v1/posts",
      axios.defaults.headers
    );

    setPosts(data.data.data);
  };
  const handleChange = (e) => {
    const newData = { ...inputValue };
    newData[e.target.id] = e.target.value;
    setInputValue(newData);
    console.log(inputValue);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };



  const handleEditClose = () => {
    setEditOpen(false);
    setInputValue({
      user_id: "",
      title: "",
      body: "",
    });
  };
  const handleEditOpen = (record) => {
    setEditOpen(true);
    setRecordData(record);
    setInputValue({
      user_id: record.user_id,
      title: record.title,
      body: record.body,
    });
    console.log(record);
  };

  const editStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 0,
    p: 4,
  };

  const handleEdit = () => {
    if (recordData) {
      axios
        .put(
          `https://gorest.co.in/public/v1/posts/${recordData.id}`,
          {
            user_id: inputValue.user_id,
            title: inputValue.title,
            body: inputValue.body,
          },
          axios.defaults.headers
        )
        .then(() => {
          setEditOpen(false);
          fetchData();
        });
    }
  };

  const getData = async () => {
    const res = await axios.get(
      `https://gorest.co.in/public/v1/posts?page=${page}`
    );
    setPosts(res.data.data);
  };

  useEffect(() => {
    const loadPosts = async () => {
      const res = await axios.get(
        `https://gorest.co.in/public/v1/posts?page=${page}`
      );
      setPosts(res.data.data);
    };
    loadPosts();
  }, [page]);

  return (
    <div>
      <CssBaseline />
      <Container component={Box} py={3}>
        <Grid>
          <TableContainer>
            <Table
              sx={{ width: "100%", margin: "auto", border: "0.5px solid #ccc" }}
            >
              <TableHead>
                <TableRow
                  sx={{
                    textTransform: "uppercase",
                    backgroundColor: "#1976d2",
                  }}
                >
                  <TableCell
                    sx={{
                      textAlign: "center",
                      color: "#fff",
                      border: "1px solid #ccc",
                    }}
                  >
                    Posts Id
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      color: "#fff",
                      border: "1px solid #ccc",
                    }}
                  >
                    User Id
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      color: "#fff",
                      border: "1px solid #ccc",
                    }}
                  >
                    Title
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      color: "#fff",
                      border: "1px solid #ccc",
                    }}
                  >
                    Description
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      color: "#fff",
                      border: "1px solid #ccc",
                    }}
                  >
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {posts.map((post) => (
                  <TableRow key={post.id}>
                    <TableCell
                      sx={{ border: "1px solid #ccc", textAlign: "center" }}
                    >
                      <Avatar sx={{ bgcolor: deepOrange[900] }}>
                        {post.id}
                      </Avatar>
                    </TableCell>
                    <TableCell
                      sx={{ border: "1px solid #ccc", textAlign: "center" }}
                    >
                      <Avatar sx={{ bgcolor: deepPurple[500] }}>
                        {post.user_id}
                      </Avatar>
                    </TableCell>
                    <TableCell
                      sx={{ border: "1px solid #ccc", textAlign: "center" }}
                    >
                      {post.title}
                    </TableCell>
                    <TableCell
                      sx={{ border: "1px solid #ccc", textAlign: "center" }}
                    >
                      {post.body}
                    </TableCell>
                    <TableCell sx={{ border: "1px solid #ccc" }}>
                      <Button onClick={() => handleEditOpen(post)}>
                        <EditIcon />
                      </Button>
                      <Modal open={editOpen} onClose={handleEditClose}>
                        <Box sx={editStyle}>
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                            align="center"
                            color="primary"
                          >
                            {" "}
                            Edit Post{" "}
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
                          <Typography sx={{ marginTop: "10px" }}>
                            Title
                          </Typography>
                          <TextField
                            required
                            id="title"
                            onChange={(e) => handleChange(e)}
                            value={inputValue.title}
                            placeholder="Title"
                            sx={{ marginTop: "10px", width: "100%" }}
                          />

                          <Typography sx={{ marginTop: "10px" }}>
                            Body
                          </Typography>
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
                            onClick={handleEdit}
                          >
                            Edit
                          </Button>
                          <Button
                            onClick={handleEditClose}
                            sx={{ marginTop: "20px", float: "right" }}
                          >
                            Cancel
                          </Button>
                        </Box>
                      </Modal>
                      <Button
                        onClick={() => {
                          if (
                            window.confirm(`Are you sure you want to delete?`)
                          ) {
                            axios
                              .delete(
                                `https://gorest.co.in/public/v1/posts/${post.id}`
                              )
                              .then(() => {
                                getData();
                              });
                          }
                        }}
                      >
                        <DeleteIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Box py={3} display="flex" justifyContent="center">
          <Pagination
            showFirstButton
            showLastButton
            count={80}
            color="secondary"
            variant="outlined"
            onChange={(e, value) => {
              setPage(value);
            }}
          />
        </Box>
      </Container>
    </div>
  );
};

export default PaginationTest;
