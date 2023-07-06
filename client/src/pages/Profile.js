import React from 'react'
import Paper from '@mui/material/Paper';
import { format } from "date-fns";
import '../assets/css/Profile.css'

export default function Profile() {

  const customStyles = {
    '@media (max-width: 320px)' : {
      minWidth: 300,
      width: 300,
      textAlign: 'center',
      marginTop: '20px',
      backgroundColor: '#FE5720',
    },
    '@media (min-width: 321px) and (max-width: 600px)' : {
      minWidth: 320,
      maxWidth:400,
      
      textAlign: 'center',
      marginTop: '20px',
      backgroundColor: '#FE5720',
    },
    '@media (min-width: 601px) and (max-width: 960px)' : {
      minWidth: 333,
      maxWidth: 500,
      textAlign: 'center',
      marginTop: '20px',
      marginInline:'20px',
      backgroundColor: '#FE5720',
    },
    '@media (min-width: 961px) and (max-width: 1280px)': {
      minWidth: 425,
 
    //   height: 400 ,
      textAlign: 'center',
      marginTop: '20px',
      marginInline:'20px',
      backgroundColor: '#FE5720',
    },
    '@media (min-width: 1281px)': {
    //   minWidth: 500,
      width: 400,
      textAlign: 'center',
      marginTop: '20px',
      marginInline: '20px',
      backgroundColor: '#FE5720',
    },
  }


  return (
    <div className='profile-container'>
             <Paper sx={customStyles} >
            <h2>{format(new Date(), "MM-dd-yyyy")}</h2>
          
        </Paper>

        <Paper sx={customStyles} >
            <h2>Today's To-Do's</h2>

        </Paper>

        <Paper sx={customStyles} >
            <h2>Journal</h2>
 
        </Paper>
        <Paper sx={customStyles} >
            <h2>extra</h2>
 
        </Paper>
    </div>
  )
}
