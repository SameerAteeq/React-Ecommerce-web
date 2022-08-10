
import React, { useState, useEffect, useContext } from 'react'
import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { Alert, Button, Grid, IconButton, Snackbar, Stack, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import { DataContext, ProductContext } from '../helper'
import ImageSlider from './ImageSlider'
import { cartAndWishlistHandler, checkItemExist } from '../helpers/productHelper'

const FullCard = () => {
    const [openMsg, setOpenMsg] = useState(false)
    const [shoe, setShoe] = useState(null);
    const [snackbarText, setSnackbarText] = useState("");
    const { Items } = useContext(DataContext);
    let { id } = useParams();
    useEffect(() => {
        setShoe(Items?.find(x => x.id === +id))
    }, [id, Items])
    console.log(typeof +id, "id");
    console.log(shoe, "shoe");
    const { selectedCard, setSelectedCards, wishList, setWishList, setTotal } = useContext(ProductContext)
    useEffect(() => {
        setTotal(selectedCard.reduce((acc, curr) => acc + Number(curr.price) * Number(curr.quantity), 0))
    }, [setTotal, selectedCard])
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenMsg(false);
    };

    return (
        <>
            {shoe && (

                <Grid container padding={2} gap={1} spacing={1} >
                    <Grid item xs={12} sm={12} md={6} lg={5} xl={5}>
                        <ImageSlider images={shoe.images} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={6} xl={4}>
                        <Stack direction="column" justifyContent="space-between" gap={1}>

                            <Typography variant="h2" sx={{ fontSize: { xs: "40px", sm: "40px", md: "40px" }, fontWeight: "400" }}>
                                {shoe.title}
                            </Typography>
                            <Typography variant='h4' sx={{ mt: "10px", color: "#2d2e2e" }}>
                                ${shoe.price}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mt: "12px" }}>
                                A shoe is an item of footwear intended to protect and comfort the human foot.  The design of shoes has varied enormously through time and from culture to culture,
                            </Typography>
                            <Stack mt="12px" gap={1} direction="row"  >
                                <Button sx={{ backgroundColor: "#aa58e9", color: "white" }} variant='contained' onClick={() => cartAndWishlistHandler(id, selectedCard, setSelectedCards, setSnackbarText, shoe, setOpenMsg, "cart")}>{checkItemExist(selectedCard, shoe.id) ? "Remove from Cart" : "Add to Cart"}</Button>
                                <IconButton onClick={() => cartAndWishlistHandler(id, wishList, setWishList, setSnackbarText, shoe, setOpenMsg, "wishlist")}>{checkItemExist(wishList, shoe.id) ? <Favorite sx={{ color: "black" }} /> : <FavoriteBorder sx={{ color: "black" }} />}</IconButton>
                                <Snackbar open={openMsg} autoHideDuration={3000} onClose={handleClose}>
                                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                        {snackbarText}
                                    </Alert>
                                </Snackbar>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>

            )
            }
        </>
    )
}

export default FullCard