import { Add, Close, Delete, Remove, ShoppingBasketOutlined } from '@mui/icons-material'
import { Box, Drawer, IconButton, List, ListItem, Stack, styled, Typography } from '@mui/material'

import React, { useContext } from 'react'
import { ProductContext } from '../helper'
import { quantityHandler } from '../helpers/productHelper'
import EmptyDrawer from './EmptyDrawer'

const CartDrawer = () => {

    const { total, open, setOpen, selectedCard, setSelectedCards } = useContext(ProductContext)
    console.log(total, 'tot')
    const ImageStyle = styled("img")(({ src }) => ({
        src: `url(${src})`,
        height: "50px",
        width: "50px",
        borderRadius: "50%"
    }))

    console.log(selectedCard, 'selectedCard');
    const StackStyle = styled(Box)({
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 12px",
        backgroundColor: "#f5f0f0"
    })

    return (
        <>
            <Drawer PaperProps={{ sx: { width: "300px", height: "95vh" } }} open={open} onClose={() => setOpen(false)} anchor='right'>
                <Box sx={{ position: "relative" }}>
                    <StackStyle >
                        <Stack direction="row" alignItems="center" gap="2px">
                            <IconButton><ShoppingBasketOutlined /></IconButton>
                            <Typography variant='h6' align='center' >Shopping Cart</Typography>
                        </Stack>
                        <Box >
                            <IconButton onClick={() => setOpen(false)} ><Close sx={{ color: "#918a8a", "&:hover": { color: "red" }, fontSize: "18px" }} /></IconButton>
                        </Box>
                    </StackStyle>
                    {selectedCard.length ?

                        <List>
                            {selectedCard.map((item) => (
                                <ListItem key={item.id}>

                                    <Stack borderRadius="10px" padding="2px" direction='row' gap={2.5} justifyContent='space-between' alignItems='center'>

                                        <ImageStyle src={item.images[0]}></ImageStyle>
                                        <Box>
                                            <Typography variant="p" sx={{ textAlign: "center" }}>
                                                {item.title}
                                            </Typography>
                                            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                                ${item.price}
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Stack direction='row' justifyContent='center' alignItems='center' sx={{ backgroundColor: "#ffffff" }}>
                                                <IconButton onClick={() => quantityHandler(item.id, selectedCard, setSelectedCards, "add")}><Add sx={{ color: "green", fontSize: "12px" }} /></IconButton>
                                                <Typography varient='p' >{item.quantity}</Typography>
                                                <IconButton onClick={() => quantityHandler(item.id, selectedCard, setSelectedCards, "sub")}><Remove sx={{ color: "red", fontSize: "12px" }} /></IconButton>
                                            </Stack>
                                        </Box>
                                        <Box>
                                            <IconButton onClick={() => setSelectedCards(selectedCard.filter(x => x.id !== item.id))}>  <Delete sx={{ color: "#e22c2c", fontSize: '22px' }} /></IconButton>
                                        </Box>
                                    </Stack>
                                </ListItem>
                            ))}
                        </List> : <EmptyDrawer />
                    }
                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: '#aa58e9', width: "300px", padding: "5px 12px", bottom: "2%", position: "fixed" }}>
                    <Typography variant='h5' sx={{ color: "white" }} >Total</Typography>
                    <Typography variant='h6' sx={{ backgroundColor: "white", padding: "3px 4px", borderRadius: "5px", color: '#aa58e9' }} >${total}.00</Typography>
                </Box>
            </Drawer >

        </>
    )
}

export default CartDrawer
