import React, { useState } from 'react'
import { Stack, Paper, Typography, Button } from '@mui/material'
import Input_Component from '../Components/Input_Components'
import { credentials_data } from '../Utils/credentials_data'
import { useNavigate } from 'react-router-dom'
// import gifImg from '../../../assets/gif.gif'
import IMAGES from '../assets/Images/index'
const Login = () => {
    const [userData, setUserData] = useState({})
    const navigate = useNavigate()
    // console.log(credentials_data)

    // useState is hook use for every time when their is need to change the state 

    const onChnageHandle = (e) => {
        // console.log(userData, "userDta")
        const { value, id } = e.target;
        setUserData({ ...userData, [id]: value });
        // square method 
    }
    const submitHandle = (e) => {
        e.preventDefault();
        const { username, password } = userData;
        if (
            username === credentials_data.username &&
            password === credentials_data.password
        ) {
            // alert("correct credentials");
            localStorage.setItem("isLoggedIn", true);
            navigate("/", { state: userData });
        } else {
            alert("Invalid credentials!");
        }

        // credentials_data
    };
    return (
        <Stack style={{
            justifyContent: 'space-around',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'row',
            height: '100vh'
        }}>
            <div style={{ border: 1, borderColor: 'black' }}>

                <Paper
                    component="form"
                    onSubmit={submitHandle}
                    sx={{ px: 2, py: 3 }}
                    elevation={10}
                >
                    <Typography align="center" fontWeight="bold" variant="h4" color='Highlight' sx={{ mb: 3 }}>
                        Login
                    </Typography>
                    <Input_Component
                        placeholder="admin"
                        type="text"
                        required={true}
                        onChange={onChnageHandle}
                        id='username'
                    />
                    <Input_Component
                        placeholder="12345"
                        type="password"
                        required={true}
                        onChange={onChnageHandle}
                        id='password'
                    />

                    <Button
                        sx={{ width: "100%", mt: 2 }}
                        type='submit'
                        variant='contained'
                        color='success'>
                        Submit
                    </Button>
                </Paper>
            </div>
            <Stack sx={{ width: 600, height: 400 }}>
                <img src={IMAGES.image2} alt='first image' width='100%' height='100%' />
            </Stack>

        </Stack>

    )
}
export default Login
