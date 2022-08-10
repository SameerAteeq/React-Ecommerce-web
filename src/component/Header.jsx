import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Header = () => {

    return (
        <Box>
            <Navbar />

            <Outlet />
        </Box>
    )
}

export default Header