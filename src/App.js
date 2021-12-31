import React from 'react'

import NavBar from './components/Navbar/NavBar'
import CommentList from './components/CommentList/CommentList'






import { Typography } from '@mui/material'

const App = () => {
    return (
        <div>
            <header>
           
            </header>
            <main>  
            <NavBar />
            <Typography variant='h5' align='center' sx={{margin:'20px 0px'}}>
            Danh sách bài POST    

            </Typography>
           
            <CommentList />
         
            </main>
        </div>
    )
}

export default App
