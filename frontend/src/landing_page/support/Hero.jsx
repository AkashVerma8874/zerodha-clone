import React from 'react';
import { TextField } from "@mui/material";

function Hero() {
    return ( 
        <section className="conatiner-fluid" id="supportHero">
            <div className="p-3" id="supportWraper">
                <h4 className="mt-3">Support Portal</h4>
                <a href=""className="text-white text-decoration-underline mt-3">Track Tickets</a>
            </div>
            <div className="row p-3 mx-5" >
                <div className="col-5 p-5">
                    <h1 className="fs-4">
                        Search for an answer or browse help topics
                        to create a ticket
                    </h1>
                    <TextField
                        placeholder="Eg: how do I activate F&O, why is my order getting rejected..."
                        variant="outlined"
                        fullWidth
                        sx={{
                            backgroundColor: "white",
                            borderRadius: "5px",
                            width: "500px", // Custom Width
                        }}
                    />
                    <br />
                    <a href="#" className="text-white text-decoration-underline me-3">
                        Track account opening
                    </a>

                    <a href="#" className="text-white text-decoration-underline me-3">
                        Track segment activation
                    </a>

                    <a href="#" className="text-white text-decoration-underline me-3">
                        Intraday margins
                    </a>

                    <a href="#" className="text-white text-decoration-underline">
                        Kite user manual
                    </a>
                </div>
                <div  className="col-2"></div>
                <div className="col-5 p-5">
                    <h3>Featured</h3>
                    <ol>
                        <li className="mb-3">
                            <a href="#" className="text-white text-decoration-underline">
                            Current Takeovers and Delisting - January 2024
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-white text-decoration-underline">
                            Latest Intraday leverages - MIS & CO
                            </a>
                        </li>
                    </ol>
                </div>
            </div>
                    
        </section>
    );
}

export default Hero;