import React from "react";
import LogInForm from "../pages/Login";
import SingUpForm from "../pages/SignUp";
import { Card } from "@mui/material";
import '../assets/css/WelcomePage.css'

export default function WelcomePage(){
     

return(
    <div className="welcome-page">
        
        <Card sx={{
            width: '70%',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#FE5720',
        }}>
            <h1>Start Your Journey</h1>
            <div className="welcome-btn">
        <LogInForm />
        <SingUpForm />
        </div>
        </Card>
 

    </div>
)

}