import { Alert, Button, Card, CardActions, CardContent, CardMedia, Rating, Snackbar, Stack, styled, Typography } from '@mui/material';
import { AddShoppingCart, Favorite, FavoriteBorder, RemoveShoppingCart } from '@mui/icons-material';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../helper';
import { cartAndWishlistHandler, checkItemExist } from '../helpers/productHelper';


const CardList = ({ item }) => {
    const { images, title, id, price } = item;
    const [snackbarText, setSnackbarText] = useState("");
    const Cardmedia = styled(CardMedia)({
        width: "300px",
        boxSizing: "border-box",
        backgroundSize: "cover",
        backgroundPosition: "center",
        cursor: "pointer",

    })

    const { selectedCard, setSelectedCards, wishList, setWishList } = useContext(ProductContext);
    const navigate = useNavigate()

    return (
        <>

            <Card className='card' sx={{ maxWidth: 350, borderRadius: "10px" }} >

                <Cardmedia
                    component="img"
                    height="250"
                    image={images[0]}
                    onClick={() => navigate(`/about/${id}`)}
                >
                </Cardmedia>
                <CardContent>
                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} size="small" />
                    <Typography variant="h5" component="div">
                        {title}
                    </Typography>

                    <Typography variant='h6' sx={{ color: "red", fontWeight: "bold" }}>${price}</Typography>
                </CardContent>
                <CardActions>
                    <Stack direction="row">
                        <Button onClick={() => cartAndWishlistHandler(id, selectedCard, setSelectedCards, setSnackbarText, item, "cart")}>{checkItemExist(selectedCard, item.id) ? <RemoveShoppingCart sx={{ color: "black" }} /> : <AddShoppingCart sx={{ color: "black" }} />}</Button>
                        <Button onClick={() => cartAndWishlistHandler(id, wishList, setWishList, setSnackbarText, item, "wishlist")}>{checkItemExist(wishList, item.id) ? <Favorite sx={{ color: "black" }} /> : <FavoriteBorder sx={{ color: "black" }} />}</Button>
                    </Stack>

                </CardActions>
            </Card>
        </>
    )
}

export default CardList