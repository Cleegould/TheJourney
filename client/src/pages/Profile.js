import React from 'react';
import Paper from '@mui/material/Paper';
import { format } from "date-fns";
import '../assets/css/Profile.css'
import auth from '../utils/auth';
import RedirectLogin from './Redirect-Login';
import ChallengeForm from '../components/ChallengeForm';
import NewTask from '../components/NewTask';
import { useQuery } from '@apollo/client';
import ChallengeTasks from '../components/ChallengeTasks';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// import { useEffect } from 'react';

import { QUERY_CHALLENGE } from '../utils/queries';

export default function Profile() {

  const customStyles = {
    '@media (max-width: 320px)' : {
      // minWidth: 300,
      // width: 300,
      textAlign: 'center',
      margin: '20px',
      backgroundColor: '#FE5720',
    },
    '@media (min-width: 321px) and (max-width: 600px)' : {
      // minWidth: 320,
      // maxWidth:400,
      textAlign: 'center',
      margin: '20px',
      backgroundColor: '#FE5720',
    },
    '@media (min-width: 601px) and (max-width: 960px)' : {
      // minWidth: 333,
      // maxWidth: 500,
      textAlign: 'center',
      margin: '20px',
      marginInline:'20px',
      backgroundColor: '#FE5720',
    },
    '@media (min-width: 961px) and (max-width: 1280px)': {
      // minWidth: 425,
      textAlign: 'center',
      margin: '20px',
      marginInline:'20px',
      backgroundColor: '#FE5720',
    },
    '@media (min-width: 1281px)': {
      // width: 400,
      textAlign: 'center',
      margin: '20px',
      marginInline: '20px',
      backgroundColor: '#FE5720',
    },
  }

  const {data} = useQuery(QUERY_CHALLENGE)

  const challenge = data?.challenge || {} ;
  const tasks = challenge.tasks;
  const log = () => {console.log('tasks: ', tasks)}
  log()

  if (!auth.loggedIn()) {
    return <RedirectLogin />;
  }

  return (
    <Box className='profile-container'>
    <Grid 
      container 
      spacing={{ xs: 2, md: 3 }} 
      columns={{ xs: 4, sm: 8, md: 12 }} 
      direction="row"
      justifyContent="center"
      alignItems="top"
      flex-wrap= "wrap"
      >

      <Grid item 
      xs={12}
      alignItems="center"
      >
      {Object.keys(challenge).length !== 0 ? (
        <Grid item 
        alignItems="center">
      
      <Paper sx={{ 
          display: 'flex',
          justifyContent: 'center' ,
          backgroundColor: '#FE5720',
          textAlign: 'center',
          marginTop: '20px',
          marginInline: '20px',
          }}>
          <div>
            <h2>Current Challenge</h2>
            <h3>{challenge.title}</h3>
            <p>{challenge.description}</p>
          </div>
        </Paper>
      </Grid>
        ):(null)}
        
      </Grid>

      <Grid item 
      xs={2} sm={3} md={4}
      alignItems="center">

        {Object.keys(challenge).length !== 0 ? (
          <Paper sx={customStyles} >
            <h2>{format(new Date(), "MM-dd-yyyy")}</h2>
            <h2>profile</h2>
            <NewTask />
          </Paper>
        ):(
          <Paper sx={customStyles} >
            <h3> Start New Challenge</h3>
            <ChallengeForm challenge={challenge} />
          </Paper>
        )}
      </Grid>   

      {Object.keys(challenge).length !== 0 ? (
        <Grid item 
      xs={2} sm={3} md={6}
      alignItems="center">
      
        <Paper sx={customStyles} >
          <h2>This Challenge's To-Do Tasks</h2>
          
          {tasks ? <ChallengeTasks tasks={tasks} /> : null} 
        </Paper>
      </Grid>
        ):(null)}


    </Grid>
    </Box>
  )
}
