import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

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
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "https://zerodha-clone-p7r3.onrender.com/login",
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
    });
  };

  return (
    <>
      <div className="form-conatner">
        <div className="row p-5 mb-5 text-center">
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
                 Login
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
                    Login
                </Button>

                <Typography align="center" sx={{ mt: 2 }}>
                    Don't have an account?{" "}
                    <Link to="/signup">Signup</Link>
                </Typography>
            </form>
      </Paper>

        </div>
      </div>
     
      <ToastContainer />
    </>
  );
}

export default Login;