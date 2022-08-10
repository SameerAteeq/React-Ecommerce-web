import { Stack, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react'
import { DataContext, ProductContext } from '../helper';
import CardList from './CardList';

const Cards = () => {

    const { Items } = useContext(DataContext);
    const { selectedCard, setTotal } = useContext(ProductContext);
    useEffect(() => {
        setTotal(selectedCard.reduce((acc, cur) => acc + Number(cur.price) * Number(cur.quantity), 0))
    }, [setTotal, selectedCard])
    console.log('selec', selectedCard)

    return (
        <>
            <Typography variant="h3" sx={{ color: "#1b1a1adf", m: "30px 0", textAlign: "center", fontWeight: '500' }} >Exclusive Products</Typography>
            <Stack direction="row" pt={1} gap={2} justifyContent="center" flexWrap="wrap">
                {Items.map((item) => (
                    <CardList key={item.id} item={item} />
                ))}
            </Stack>
        </>

    )
}

export default Cards;