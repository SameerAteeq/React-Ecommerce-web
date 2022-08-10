import React, { useContext } from 'react'
import { ProductContext } from '../helper'
import { Box, IconButton, Paper, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Clear, } from '@mui/icons-material';
import Empty from './Empty';

const WishCart = () => {
    const { wishList, setWishList } = useContext(ProductContext);
    const Imgs = styled("img")(({ theme, src }) => ({
        [theme.breakpoints.up('sm')]: {
            src: `url(${src})`,
            width: "90px",
            height: "80px"
        },
        [theme.breakpoints.down('sm')]: {
            width: "60px",
            height: "60px",
        }
    }))


    return (
        <Box >
            <Typography variant='h3' align='center' sx={{ color: "#1b1a1adf", m: "20px 0", sm: { variant: 'h5' } }}>
                WISHLIST
            </Typography>

            {wishList.length ?
                (<TableContainer component={Paper}>
                    <Table sx={{ minWidth: 350 }} aria-label="sticky table" stickyHeader>
                        <TableHead sx={{ fontWeight: "bold", fontSize: "30px" }}>
                            <TableRow sx={{ fontWeight: "bold", fontSize: "30px" }}>
                                <TableCell>Product</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Remove</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {wishList.map((row) => (
                                <TableRow key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell sx={{ display: "flex", flexDirection: "row", gap: "6px", alignItems: "center", fontSize: "14px", fontWeight: "500" }}><Imgs src={row.images[0]}></Imgs>{row.title}</TableCell>
                                    <TableCell sx={{ fontWeight: "bold" }}>${row.price}</TableCell>
                                    <TableCell><IconButton onClick={() => setWishList(wishList.filter(x => x.id !== row.id))}><Clear sx={{ color: "red", fontSize: "30px" }} /></IconButton></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>) : <Empty />
            }
        </Box >
    )
}

export default WishCart