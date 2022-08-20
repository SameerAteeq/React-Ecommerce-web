import { Box, FormControl, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase";
import "./login.css";

const Login = () => {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate("/");
            })
            .catch((error) => {
                setError(true);
            })
    }
    return (
        <Box className="ContainerBox">
            <Box className="formContainer">
                <h1>Sign in to Sneakers Web</h1>
                <form onSubmit={handleSubmit}>
                    <input type="email" variant="outlined" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" className="btn"> Sign in</button>
                    {error && <span>Wrong email or password !</span>}
                </form>
                <Stack direction="row" alignItems="center" gap="5px" mt="10px">
                    <Typography className="pgh">Don't have an account?</Typography>
                    <Typography variant="h6" component={Link} to="/signUp" sx={{ textDecoration: "none", color: "#9a34e9", fontSize: "17px" }}>Sign up</Typography>
                </Stack>
            </Box>
        </Box>
    )
}

export default Login