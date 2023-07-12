import * as React from 'react';

import Paper from '@mui/material/Paper';

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
  // const logTask = () => {console.log( challenge)}
  // logTask()
  dayjs.extend(relativeTime);

  const markedDays = (date,frequency) => {
    let startDate = dayjs(date);
    console.log(startDate.format('YYYY-MM-DD'));
    let eventDate = startDate.add(frequency, 'day');
    let endDate = startDate.add(30, 'day');
    let dates = [];
    dates.push(startDate.format('YYYY-MM-DD'))
  
    while (eventDate.isBefore(endDate)) {
      dates.push(eventDate.format('YYYY-MM-DD'));
      eventDate = eventDate.add(frequency, 'day');
    }
  // console.log(dates);
    return dates;
  };
 
  
  // 1689182061499
  function isDisplayed(challengeDate, task) {
    
    const takss =[]
    const taskDays = markedDays(challengeDate,task.frequency)
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
  const taskDays = markedDays(challengeDate,task.frequency)
  console.log(taskDays);
  const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD')
  // console.log(tomorrow);
  if (taskDays.includes(tomorrow)) {
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
            {(data?.challenge == null) ? <h2>No tasks scheduled for today!</h2> : 
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
            {(data?.challenge == null)? <h2>No tasks scheduled for tomorrow!</h2> : 
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