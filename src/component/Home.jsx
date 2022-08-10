import { Box, Button, styled, Typography } from '@mui/material'
import React from 'react'
import About from './About'
const Home = () => {
    const BannerContainer = styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        padding: "10px",
        backgroundColor: "#c8c0ce",
        margin: "20px 0",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            alignItems: "center",
        },
        [theme.breakpoints.up("sm")]: {
            flexDirection: "row",
            alignItems: "center",

        },
    }))
    const BannerContent = styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "30px",
        marginBottom: "20px",
        [theme.breakpoints.down("sm")]: {
            marginBottom: "10px",
        }
    }))
    const BannerImage = styled("img")(({ src, theme }) => ({
        src: `url(${src})`,
        width: "400px",
        height: "600px",
        borderRadius: "20%",
        [theme.breakpoints.down("sm")]: {
            width: "350px",
            height: "450px",
            borderRadius: "5%",
        }
    }))
    const TypStyle = styled(Typography)(({ theme }) => ({
        [theme.breakpoints.down('sm')]: {
            fontSize: "45px"
        }
    }))
    const BtnStyle = styled(Button)(({ theme }) => ({
        [theme.breakpoints.down("sm")]: {
            padding: "7px",
            backgroundColor: '#aa58e9',
            width: "30%",
            margin: "12px 0"
        },
        [theme.breakpoints.up("sm")]: {
            padding: "7px",
            width: "30%",
            margin: "15px 0"
        }
    }))
    return (
        <>

            <BannerContainer >
                <BannerContent >
                    <Typography variant="h6" sx={{ mb: "20px" }} >40% off in all products</Typography>
                    <TypStyle variant='h2' sx={{ color: "#1b1a1adf", fontWeight: "500" }} >Buy Today Enjoy Today</TypStyle>
                    <BtnStyle variant='contained' sx={{ backgroundColor: '#aa58e9' }} >Buy Now</BtnStyle>
                </BannerContent>
                <BannerImage src='https://source.unsplash.com/KCZu5b1D-XQ' />
            </BannerContainer>

            <About />
        </>

    )
}

export default Home