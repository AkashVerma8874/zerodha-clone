import React from 'react';
import { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import OpenAccount from '../OpenAccount';
import Login from './Login';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Signup() {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "https://zerodha-clone-p7r3.onrender.com/signup",
        {
          ...inputValue,
        },
        {
          withCredentials: true,
        }
      );

      const { success, message } = data;

      if (success) {
        handleSuccess(message);

        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
      handleError("Something went wrong");
    }

    setInputValue({
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <>
      <div className="from-container mt-5">
        <div className="row text-center pt-5 mt-5">
            <h1 className="fs-3">Open a free demat and trading account online</h1>
            <p className="fs-4 text-muted">Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
        </div>
        <div className="row text-center p-5 mb-5">
            <div className="col-6 p-5 mt-5">
                <img src="media/images/signup.png" alt="Open-Account" style={{width:"100%"}}/>
            </div>
            <div className="col-6 p-5">
                <Paper
                    elevation={4}
                    sx={{
                    p: 4,
                    maxWidth: 450,
                    mx: "auto",
                    mt: 8,
                    }}
                >
                    <Typography variant="h4" align="center" gutterBottom>
                        Sign Up
                    </Typography>

                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="Email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleOnChange}
                            margin="normal"
                        />

                        <TextField
                            fullWidth
                            label="Username"
                            name="username"
                            value={username}
                            onChange={handleOnChange}
                            margin="normal"
                        />

                        <TextField
                            fullWidth
                            label="Password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleOnChange}
                            margin="normal"
                        />

                        <Button
                            fullWidth
                            variant="contained"
                            type="submit"
                            sx={{ mt: 2 }}
                        >
                            Sign Up
                        </Button>

                        <Typography align="center" sx={{ mt: 2 }}>
                            Already have an account?{" "}
                            <Link to="/Login">Login</Link>
                        </Typography>
                    </form>
                </Paper>
            </div>
           
        </div>
      </div>
      
      <ToastContainer />
    </>
  );
}

export default Signup;