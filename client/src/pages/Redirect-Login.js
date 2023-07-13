import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from '@mui/material'
import '../assets/css/Redirect-Login.css'

export default function RedirectLogin() {
  return (
  
        
    <div className='redirect-login' >
        <Card sx={{
        width: '70%',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#F6713C',
    }}>
        <h1>Log in to see your information.<Link to='/'>Log in!</Link></h1>

    </Card>
    </div>



  )
}
