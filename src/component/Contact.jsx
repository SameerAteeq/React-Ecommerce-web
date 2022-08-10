import { TextField, Typography } from '@mui/material'
import React from 'react'

const Contact = () => {
    return (
        <>
            <Typography variant='h3'>Contact form</Typography>
            <form>
                <TextField label="First Name" fullWidth></TextField>
                <TextField label="Last Name" fullWidth></TextField>

            </form>
        </>
    )
}

export default Contact