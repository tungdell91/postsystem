import React from "react";
import { Pagination, CssBaseline, Container, Grid, Box, TableCell, TableRow } from "@mui/material";
import { useState, useEffect } from "react";
import axios from 'axios'

const PaginationTest = () => {
    
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
  
    useEffect(() => {
        const loadPosts = async () => {
            const res = await axios.get(`https://gorest.co.in/public/v1/posts?page=${page}`);
            setPosts(res.data.data);
          };
        
        loadPosts();  
    }, [page]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  return (
  
  <div> 
     <CssBaseline />
      <Container component={Box} py={3}>
        <Grid>
       
          {posts.map((post) => (
              
              <TableRow key={post.id}>
                <TableCell>{post.id}</TableCell>
                <TableCell>{post.user_id}</TableCell>
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.body}</TableCell>
                <TableCell>
                  Fix  
                </TableCell>
              </TableRow>
            ))}
        </Grid>
        <Box py={3} display="flex" justifyContent="center">
          <Pagination
            count={80}
            color="secondary"
            variant="outlined"
            onChange={(e, value) => {
                setPage(value)
                
                }}
          />
        </Box>
      </Container>
  </div>
  )
};

export default PaginationTest;
