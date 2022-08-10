import { Favorite } from '@mui/icons-material'
import { Button, Icon, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'
const Empty = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center", alignItems: "center" }}>
            <IconButton><Favorite sx={{ fontSize: "300px", cursor: "default" }} /></IconButton>
            <Typography variant='h6'>No items found in wishlist</Typography>
            <Button sx={{ backgroundColor: '#aa58e9', width: "150px", mt: "20px" }} onClick={() => navigate(`/about`)} variant='contained'>Add Some</Button>
        </Box>
    )
}

export default Empty