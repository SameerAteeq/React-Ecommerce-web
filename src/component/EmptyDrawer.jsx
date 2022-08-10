import { RemoveShoppingCart } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'

const EmptyDrawer = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", mt: "50%", justifyContent: "center", alignItems: "center" }}>
            <RemoveShoppingCart sx={{ color: "gray", fontSize: "100px" }} />
            <Typography variant='h6' sx={{ color: "#3b3a3a" }}>Your cart is empty</Typography>
        </Box>
    )
}

export default EmptyDrawer