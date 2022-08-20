import { Box, Grid, IconButton, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useEffect } from "react";
import { useState } from "react";
import { sortData } from "../../utils";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import "./signUp.css";
import { useContext } from "react";
import { FormContext } from "../../helper";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [countries, setCountries] = useState([]);
    const [passwrd, setPasswrd] = useState({ pass: "", confPass: "" });
    const [email, setEmail] = useState("");
    const [type, setType] = useState("password");
    const [conftype, setconfType] = useState("password");
    const [passwordIcon, setPasswordIcon] = useState(false)
    const [confpasswordIcon, setConfPasswordIcon] = useState(false)
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const handleToggle = () => {

        if (type === "password") {
            setType("text");
            setPasswordIcon(true);
        } else {
            setType("password")
            setPasswordIcon(false);
        }
    }
    const confhandleIcon = () => {
        if (conftype === "password") {
            setconfType("text");
            setConfPasswordIcon(true);
        } else {
            setconfType("password")
            setConfPasswordIcon(false);
        }
    }
    useEffect(() => {
        const getCountries = async () => {
            const resp = await fetch("https://restcountries.com/v3.1/all");
            const Contries = await resp.json();
            const names = Contries.map((obj) => obj.name);
            const allNames = names.map((name) => name.common);
            let sortedData = sortData(allNames);
            setCountries(sortedData)
        }
        getCountries();
    }, [countries])
    const submitForm = async (e) => {
        e.preventDefault();
        if (passwrd.confPass !== passwrd.pass) {
            setError(true)
            return true;
        }
        try {
            const res = await createUserWithEmailAndPassword(auth, email, passwrd.pass)
            navigate("/");
            console.log(res)
        } catch (err) {
            console.log(err)
        };
    }

    return (
        <Box className="BoxContainer">
            <Box className="Container">
                <Typography className="typ" variant="h3" align="center">Create Account</Typography>
                <form onSubmit={submitForm}>
                    <Grid container spacing={2}>

                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <input type="name" placeholder="Name" required />
                        </Grid>

                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6} className="icon">
                            <input type={type} placeholder="Password" value={passwrd.pass} onChange={(e) => setPasswrd(pre => ({ ...pre, pass: e.target.value }))} required />
                            <IconButton className="iconBtn" onClick={handleToggle}>  {passwordIcon ? <Visibility /> : <VisibilityOff />}</IconButton>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6} className="icon">
                            <input type={conftype} placeholder="Confirm Password" value={passwrd.confPass} onChange={(e) => setPasswrd(pre => ({ ...pre, confPass: e.target.value }))} required />
                            <IconButton className="iconBtn" onClick={confhandleIcon}>{confpasswordIcon ? <Visibility /> : <VisibilityOff />}</IconButton>
                            {error && <span><p>password and confirm password are differnet !</p></span>}
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <input type="text" placeholder="City" required />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <select name="countries">
                                <option title="select country" value={0} >--Select country--</option>
                                {countries.map((country) => (

                                    <option key={country} value={country}>{country}</option>
                                ))}
                            </select>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6}>

                            <select >
                                <option title="select role">--Select Role--</option>
                                <option value="Admin">Admin</option>
                                <option value="Costumer">Costumer</option>
                            </select>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <button type="submit" className="btn">Create Account</button>
                        </Grid>

                    </Grid>
                </form>
            </Box>
        </Box >
    )
}

export default SignUp