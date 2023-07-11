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
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import { useQuery } from '@apollo/client';
import { QUERY_CHALLENGE } from '../utils/queries';


const TODO = () => {
  const {loading, error, data} = useQuery(QUERY_CHALLENGE)
  // const challenge = data?.challenge || {} ;
  // const tasks = challenge.tasks
  // ;
  // const logTask = () => {console.log( tasksy)}
  // logTask()
  dayjs.extend(relativeTime);

  const markedDays = (frequency) => {
    let startDate = dayjs('2023-07-01');
    let eventDate = startDate.add(frequency, 'day');
    let endDate = startDate.add(30, 'day');
    let dates = [];
  
    while (eventDate.isBefore(endDate)) {
      dates.push(eventDate.format('YYYY-MM-DD'));
      eventDate = eventDate.add(frequency, 'day');
    }
  
    return dates;
  };
  const nextDays = (frequency) => {
    let startDate = dayjs('2023-07-01');
    let eventDate = startDate.add(frequency + 1, 'day');
    let endDate = startDate.add(30, 'day');
    let dates = [];
  
    while (eventDate.isBefore(endDate)) {
      dates.push(eventDate.format('YYYY-MM-DD'));
      eventDate = eventDate.add(frequency, 'day');
    }
  
    return dates;
  };
  
  
  function isDisplayed(challengeDate, task) {
    // console.log(task);
    const takss =[]
    const taskDays = markedDays(task.frequency, dayjs(challengeDate))
    const today = dayjs().format('YYYY-MM-DD')
    if (taskDays.includes(today)) {
      takss.push(task.taskTitle)
    }
    // console.log(takss);
    return takss
}
function nextDisplayed(challengeDate, task) {
  // console.log(task);
  const takss =[]
  const taskDays = nextDays(task.frequency, dayjs(challengeDate))
  const today = dayjs().format('YYYY-MM-DD')
  if (taskDays.includes(today)) {
    takss.push(task.taskTitle)
  }
  // console.log(takss);
  return takss
}


  

 
  
 


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
            <h1>{dayjs().format('YYYY-MM-DD')}</h1>
            {loading ? <h2>Loading...</h2> : 
      data.challenge.tasks.map(task => {
       const takss = isDisplayed(data.challenge.startDate, task)
       console.log(takss);
       return(
        <h3>{takss}</h3>
       )
       })}
        </Paper>


        <Paper sx={customStyles} >
            <h1>{dayjs().add(1,'day').format('YYYY-MM-DD')}</h1>
            {loading ? <h2>Loading...</h2> : 
      data.challenge.tasks.map(task => {
       const takss = nextDisplayed(data.challenge.startDate, task)
       console.log(takss);
       return(
        <h3>{takss}</h3>
       )
       })}
        </Paper>

        
    </main>
  );
};

export default TODO;
