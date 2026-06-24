import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Navbar from '../Navbar';
import Footer from '../Footer';
import OpenAccount from '../OpenAccount';
import Button from '@mui/material/Button';



 function Universe() {
    return ( 
        <div className="container mt-4">
            <div className="row text-center">
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                <div className="col-4 p-3 mt-4">
                    <img src="media/images/zerodhaFundhouse.png" alt="pro" style={{width:"60%"}} />
                    <p className="small text-muted mt-2 ">
                        Our asset management venture <br />
                        that is creating simple and transparent index<br />
                        funds to help you save for your goals.
                    </p>
                </div>
                <div className="col-4 p-3 mt-4">
                    <img src="media/images/sensibullLogo.svg" alt="pro" style={{width:"70%"}} />
                    <p className="small text-muted mt-3">
                        Options trading platform that lets you <br />
                        create strategies, analyze positions, and examine <br />
                        data points like open interest, FII/DII, and more 
                    </p>
                </div>
                <div className="col-4 p-3 mt-4">
                    <img src="media/images/goldenpiLogo.png" alt="pro" />
                    <p className="small text-muted mt-3">
                        Investment research platform<br />
                        that offers detailed insights on stocks,<br />
                        sectors, supply chains, and more.
                    </p>
                </div>
                <div className="col-4 p-3 mt-4">
                    <img src="media/images/streakLogo.png" alt="Pro" style={{width:"50%"}} />
                    <p className="small text-muted mt-3">
                        Systematic trading platform <br />
                        that allows you to create and backtest <br />
                        strategies without coding.
                    </p>
                </div>
                <div className="col-4 p-3 mt-4">
                    <img src="media/images/smallcaseLogo.png" alt="pro" />
                    <p className="small text-muted mt-3">
                        Thematic investing platform <br />
                        that helps you invest in diversified <br />
                        baskets of stocks on ETFs.
                    </p>
                </div>
               
                <div className="col-4 p-3 mt-4">
                    <img src="media/images/dittoLogo.png" alt="pro" style={{width:"40%"}} />
                    <p className="small text-muted mt-3">
                        Personalized advice on life<br />
                        and health insurance. No spam<br />
                        and no mis-selling.
                    </p>
                </div>
                  <Button variant="contained" className="p-2 mb-5" style={{width:"20%",margin:" 0 auto"}}>Sign up for free</Button>
            </div>
        </div>
    );
 }
 
 export default Universe;