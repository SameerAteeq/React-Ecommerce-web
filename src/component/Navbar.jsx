import { AccountCircle, ChevronRight, Favorite, Home, LocalMall, Menu, Phone, ShoppingCart } from '@mui/icons-material'
import { IconButton, Stack, styled, Typography, Toolbar, AppBar, Box, Button, Badge, SwipeableDrawer, Divider, ListItem, List, MenuItem } from '@mui/material';

import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ProductContext } from '../helper'
import CartDrawer from './CartDrawer';
const Navbar = () => {
    const [OpenMenu, setOpenMenu] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const { wishList, selectedCard, setOpen } = useContext(ProductContext)
    const StyledToolBar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    })


    return (
        <>
            <AppBar position="sticky" sx={{ backgroundColor: "white", color: 'inherit' }}>
                <StyledToolBar>
                    <Stack direction="row" gap="5px" justifyContent="center" alignItems="center">
                        <IconButton component={Link} to='/'>
                            <ShoppingCart sx={{ alignItems: "center", color: "#aa58e9", fontSize: "35px" }} />
                        </IconButton>
                        <Typography
                            variant="h5"
                            noWrap
                            component={Link} to="/"
                            color="inherit"
                            sx={{ display: { xs: 'none', sm: 'block', textDecoration: "none" }, fontWeight: "bold" }}
                        >
                            SNEAKERS
                        </Typography>
                    </Stack>


                    <Stack direction="row" spacing={2} sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
                        <Button sx={{ "&:hover": { color: "#aa58e9", } }} component={Link} to="/" color='inherit'>Home</Button>
                        <Button sx={{ "&:hover": { color: "#aa58e9", } }} component={Link} to="/about" color='inherit'>Products</Button>
                        <Button sx={{ "&:hover": { color: "#aa58e9", } }} component={Link} to="/contact" color='inherit'>Contact</Button>
                    </Stack>

                    <Stack direction='row' justifyContent="center" alignItems="center" gap="5px" >
                        <Typography variant='h6' component={Link} to="/login" sx={{ textDecoration: "none", "&:hover": { color: "#9a34e9" }, color: "inherit", fontSize: "17px" }}>Log in</Typography>
                        <IconButton component={Link} to='/wishcart'>
                            <Badge badgeContent={wishList.length} sx={{ color: "#aa58e9" }} showZero>
                                <Favorite sx={{ color: "black" }} />
                            </Badge>
                        </IconButton>
                        <IconButton onClick={() => setOpen(true)}>
                            <Badge badgeContent={selectedCard.length} sx={{ color: "#aa58e9" }} showZero>
                                <LocalMall sx={{ color: "black" }} />
                            </Badge>
                        </IconButton>

                        <IconButton sx={{ display: { xs: "block", md: "none" }, mt: "5px" }} onClick={() => setOpenMenu(true)}  >
                            <Menu sx={{ fontSize: "30px", color: "black" }} />
                        </IconButton>
                    </Stack>
                </StyledToolBar>
                <CartDrawer />
                <SwipeableDrawer PaperProps={{ sx: { width: "250px" } }} open={OpenMenu} onOpen={() => setOpenMenu(true)} onClose={() => setOpenMenu(false)} anchor='right' >
                    <Box>
                        <IconButton onClick={() => setOpenMenu(false)}>
                            <ChevronRight />
                        </IconButton>
                    </Box>
                    <Divider />
                    <List>
                        <ListItem>
                            <Home />
                            <Button sx={{ "&:hover": { color: "#aa58e9", } }} component={Link} to="/" color='inherit'>Home</Button>
                        </ListItem>
                        <ListItem>
                            <ShoppingCart />
                            <Button sx={{ "&:hover": { color: "#aa58e9", } }} component={Link} to="/about" color='inherit'>Products</Button>
                        </ListItem>
                        <ListItem>
                            <Phone />
                            <Button sx={{ "&:hover": { color: "#aa58e9", } }} component={Link} to="/contact" color='inherit'>Contact</Button>
                        </ListItem>
                    </List>
                </SwipeableDrawer>
            </AppBar>


        </>
    )
}

export default Navbar