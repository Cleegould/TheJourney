import * as React from 'react';
import { Timeline } from '@mui/lab';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Paper from '@mui/material/Paper';
import { format } from "date-fns";
import TextField from '@mui/material/TextField';
import '../../src/assets/css/To-Do.css'
import auth from '../utils/auth';
import RedirectLogin from './Redirect-Login';


const TODO = () => {

    const customStyles = {
        '@media (max-width: 320px)' : {
          minWidth: 300,
          width: 300,
          textAlign: 'center',
          marginTop: '20px',
          backgroundColor: '#FE5720',
        },
        '@media (min-width: 321px) and (max-width: 600px)' : {
          minWidth: 300,
          width:320,
          
          textAlign: 'center',
          marginTop: '20px',
          backgroundColor: '#FE5720',
        },
        '@media (min-width: 601px) and (max-width: 960px)' : {
          // minWidth: 400,
          width: 500,
          textAlign: 'center',
          marginTop: '20px',
          backgroundColor: '#FE5720',
        },
        '@media (min-width: 961px) and (max-width: 1280px)': {
        //   minWidth: 400,
          width: 500,
        //   height: 400 ,
          textAlign: 'center',
          marginTop: '20px',
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
      if (!auth.loggedIn()) {
        return <RedirectLogin />;
      } 
 

  return (
    <main className="to-do-container">
        <Paper sx={customStyles} >
            <h1>{format(new Date(), "MM-dd-yyyy")}</h1>
          
        </Paper>

        <Paper sx={customStyles} >
            <h2>Today's To-Do's</h2>
            <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Eat</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>Sleep</TimelineContent>
      </TimelineItem>
    </Timeline>
        </Paper>

        <Paper sx={customStyles} >
            <h2>Journal</h2>
            <TextField
          id="filled-multiline-static"
          label="Jornaul Entry"
          multiline
          rows={4}
          defaultValue="Type to start a note...."
          variant="filled"
          sx={{
            width: '85%',
            paddingBottom: '15px',
          }} 
        />
        </Paper>

        
    </main>
  );
};

export default TODO;
