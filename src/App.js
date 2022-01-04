import { Typography } from "@mui/material";
import React from "react";
import NavBar from "./components/Navbar/NavBar";
import PaginationTest from "./components/PaginationTest/PaginationTest";
import AddPost from "./components/AddPost/AddPost";
const App = () => {
  return (
    <div>
      <header></header>
      <main>
        <NavBar />
        <Typography align="center" variant="h3" sx={{ marginTop: "20px" }}>
          Danh sách bài Post
        </Typography>
        <br />
        <AddPost />
        <PaginationTest />
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
