import { Box, styled } from '@mui/material';
import React from 'react';
import Cards from "./Cards"

const About = () => {
    const StyledBox = styled(Box)({
        height: "100%",
        width: "100%",
    })
    return (
        <StyledBox>
            <Cards />
        </StyledBox>

    )
}

export default About