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
  TableRow

} from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete'
import Avatar from '@mui/material/Avatar';
import { deepPurple, deepOrange } from '@mui/material/colors';


const PaginationTest = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);




  

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
                    <Avatar  sx={{ bgcolor: deepOrange[900] }}>
                      {post.id}
                      </Avatar>
                    </TableCell>
                    <TableCell
                      sx={{ border: "1px solid #ccc", textAlign: "center" }}
                    >
                    <Avatar sx={{ bgcolor: deepPurple[500] }}>{post.user_id}</Avatar>
                      
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

                      <Button>
                        <EditIcon />
                      </Button> 
                      <Button>
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
