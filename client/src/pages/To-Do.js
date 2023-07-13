import * as React from "react";

import Paper from "@mui/material/Paper";

import "../../src/assets/css/To-Do.css";
import auth from "../utils/auth";
import RedirectLogin from "./Redirect-Login";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useQuery } from "@apollo/client";
import { QUERY_CHALLENGE } from "../utils/queries";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import Divider from '@mui/material/Divider';
import Checkbox from "../components/checkbox";
import UpcomingIcon from '@mui/icons-material/Upcoming';

const TODO = () => {
  const { loading, error, data } = useQuery(QUERY_CHALLENGE);
  // const challenge = data?.challenge || {} ;
  // const tasks = challenge.tasks
  // ;
  // const logTask = () => {console.log( challenge)}
  // logTask()
  dayjs.extend(relativeTime);

  const markedDays = (date, frequency) => {
    let startDate = dayjs(date);
    // console.log(startDate.format("YYYY-MM-DD"));
    let eventDate = startDate.add(frequency, "day");
    let endDate = startDate.add(30, "day");
    let dates = [];
    dates.push(startDate.format("YYYY-MM-DD"));

    while (eventDate.isBefore(endDate)) {
      dates.push(eventDate.format("YYYY-MM-DD"));
      eventDate = eventDate.add(frequency, "day");
    }
    // console.log(dates);
    return dates;
  };

  // 1689182061499
  function isDisplayed(challengeDate, task) {
    const takss = [];
    const taskDays = markedDays(challengeDate, task.frequency);
    const today = dayjs().format("YYYY-MM-DD");
    if (taskDays.includes(today)) {
      takss.push(task.taskTitle);
    }
    // console.log(takss);
    return takss;
  }
  function nextDisplayed(challengeDate, task) {
    // console.log(task);
    const takss = [];
    const taskDays = markedDays(challengeDate, task.frequency);
    // console.log(taskDays);
    const tomorrow = dayjs().add(1, "day").format("YYYY-MM-DD");
    // console.log(tomorrow);
    if (taskDays.includes(tomorrow)) {
      takss.push(task.taskTitle);
    }
    // console.log(takss);
    return takss;
  }
  function thirdDisplayed(challengeDate, task) {
    // console.log(task);
    const takss = [];
    const taskDays = markedDays(challengeDate, task.frequency);
    // console.log(taskDays);
    const tomorrow = dayjs().add(2, "day").format("YYYY-MM-DD");
    // console.log(tomorrow);
    if (taskDays.includes(tomorrow)) {
      takss.push(task.taskTitle);
    }
    // console.log(takss);
    return takss;
  }

  function fourthDisplayed(challengeDate, task) {
    // console.log(task);
    const takss = [];
    const taskDays = markedDays(challengeDate, task.frequency);
    // console.log(taskDays);
    const tomorrow = dayjs().add(3, "day").format("YYYY-MM-DD");
    // console.log(tomorrow);
    if (taskDays.includes(tomorrow)) {
      takss.push(task.taskTitle);
    }
    // console.log(takss);
    return takss;
  }
  function fifthDisplayed(challengeDate, task) {
    // console.log(task);
    const takss = [];
    const taskDays = markedDays(challengeDate, task.frequency);
    // console.log(taskDays);
    const tomorrow = dayjs().add(4, "day").format("YYYY-MM-DD");
    // console.log(tomorrow);
    if (taskDays.includes(tomorrow)) {
      takss.push(task.taskTitle);
    }
    // console.log(takss);
    return takss;
  }
  function sixthDisplayed(challengeDate, task) {
    // console.log(task);
    const takss = [];
    const taskDays = markedDays(challengeDate, task.frequency);
    // console.log(taskDays);
    const tomorrow = dayjs().add(5, "day").format("YYYY-MM-DD");
    // console.log(tomorrow);
    if (taskDays.includes(tomorrow)) {
      takss.push(task.taskTitle);
    }
    // console.log(takss);
    return takss;
  }
  function seventhDisplayed(challengeDate, task) {
    // console.log(task);
    const takss = [];
    const taskDays = markedDays(challengeDate, task.frequency);
    // console.log(taskDays);
    const tomorrow = dayjs().add(6, "day").format("YYYY-MM-DD");
    // console.log(tomorrow);
    if (taskDays.includes(tomorrow)) {
      takss.push(task.taskTitle);
    }
    // console.log(takss);
    return takss;
  }

  const customStyles = {
    "@media (max-width: 320px)": {
      minWidth: 300,
      width: 300,
      textAlign: "center",
      marginTop: "20px",
      backgroundColor: "#F6713C",
    },
    "@media (min-width: 321px) and (max-width: 600px)": {
      minWidth: 300,
      width: 320,

      textAlign: "center",
      marginTop: "20px",
      backgroundColor: "#F6713C",
    },
    "@media (min-width: 601px) and (max-width: 960px)": {
      // minWidth: 400,
      width: 500,
      textAlign: "center",
      marginTop: "20px",
      backgroundColor: "#F6713C",
    },
    "@media (min-width: 961px) and (max-width: 1280px)": {
      //   minWidth: 400,
      width: 500,
      //   height: 400 ,
      textAlign: "center",
      marginTop: "20px",
      backgroundColor: "#F6713C",
    },
    "@media (min-width: 1281px)": {
      //   minWidth: 500,
      width: '30%',
      textAlign: "center",
      marginTop: "20px",
      marginInline: "20px",
      backgroundColor: "#F6713C",
    },
  };
  if (!auth.loggedIn()) {
    return <RedirectLogin />;
  }

  return (
    <main className="task-container">
       <div className="todo-header"  >
       <Paper sx={customStyles}>
        <h1 >My Weekly To-Do's</h1>
      </Paper>
      <Paper sx={customStyles}>
        <h1>{dayjs().format("YYYY-MM-DD")}</h1>
        <h2>Todays Tasks</h2>
        <List
      sx={{
        width: '90%',
      }}
    >
        {data?.challenge == null ? (
          null
        ) : (
          data.challenge.tasks.map((task) => {
            const takss = isDisplayed(data.challenge.startDate, task);
            if (takss.length === 0) {
              return null
            }
            return (
              <>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                 <Checkbox/>
                </ListItemAvatar>
                <ListItemText primary={takss}  />
              </ListItem>
              <Divider variant="inset" component="li" />
              </>
            )
          })
        )}
    </List>
      </Paper>
      <div style={{ marginTop: '25px',width:'90%',backgroundColor:'black', height:'2px'}} ></div>
      <Paper sx={customStyles}>
        <h1>Weekly outlook</h1>

      </Paper>
       </div>
  <div className="to-do-container">

      

      <Paper sx={customStyles}>
        <h1>{dayjs().add(1, "day").format("YYYY-MM-DD")}</h1>
        <List
      sx={{
        width: '90%',
      }}
    >
        {data?.challenge == null ? (
          null
        ) : (
          data.challenge.tasks.map((task) => {
            const takss = nextDisplayed(data.challenge.startDate, task);
            console.log(takss);
            
            if (takss.length === 0) {
              return null
            }
            console.log(takss);
            return (
              <>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                <UpcomingIcon  color="action"  />
                </ListItemAvatar>
                <ListItemText primary={takss}  />
              </ListItem>
              <Divider variant="inset" component="li" />
              </>
            )
          })
        )}
    </List>
      </Paper>

      <Paper sx={customStyles}>
        <h1>{dayjs().add(2, "day").format("YYYY-MM-DD")}</h1>
        <List
      sx={{
        width: '90%',
      }}
    >
        {data?.challenge == null ? (
          null
        ) : (
          data.challenge.tasks.map((task) => {
            const takss = thirdDisplayed(data.challenge.startDate, task);
            if (takss.length === 0) {
              return null
            }
            return (
              <>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                <UpcomingIcon  color="action"  />
                </ListItemAvatar>
                <ListItemText primary={takss}  />
              </ListItem>
              <Divider variant="inset" component="li" />
              </>
            )
          })
        )}
    </List>
      </Paper>

      <Paper sx={customStyles}>
        <h1>{dayjs().add(3, "day").format("YYYY-MM-DD")}</h1>
        <List
      sx={{
        width: '90%',
      }}
    >
        {data?.challenge == null ? (
         null
        ) : (
          data.challenge.tasks.map((task) => {
            const takss = fourthDisplayed(data.challenge.startDate, task);
            if (takss.length === 0) {
              return null
            }
            return (
              <>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                <UpcomingIcon  color="action"  />
                </ListItemAvatar>
                <ListItemText primary={takss}  />
              </ListItem>
              <Divider variant="inset" component="li" />
              </>
            )
          })
        )}
    </List>
      </Paper>

      <Paper sx={customStyles}>
        <h1>{dayjs().add(4, "day").format("YYYY-MM-DD")}</h1>
        <List
      sx={{
        width: '90%',
      }}
    >
        {data?.challenge == null ? (
          null
        ) : (
          data.challenge.tasks.map((task) => {
            const takss = fifthDisplayed(data.challenge.startDate, task);
            if (takss.length === 0) {
              return null
            }
            return (
              <>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                <UpcomingIcon  color="action"  />
                </ListItemAvatar>
                <ListItemText primary={takss}  />
              </ListItem>
              <Divider variant="inset" component="li" />
              </>
            )
          })
        )}
    </List>
      </Paper>

      <Paper sx={customStyles}>
        <h1>{dayjs().add(5, "day").format("YYYY-MM-DD")}</h1>
        <List
      sx={{
        width: '90%',
      }}
    >
        {data?.challenge == null ? (
          null
        ) : (
          data.challenge.tasks.map((task) => {
            const takss = sixthDisplayed(data.challenge.startDate, task);
            if (takss.length === 0) {
              return null
            }
            return (
              <>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                <UpcomingIcon  color="action"  />
                </ListItemAvatar>
                <ListItemText primary={takss}  />
              </ListItem>
              <Divider variant="inset" component="li" />
              </>
            )
          })
        )}
    </List>
      </Paper>

      <Paper sx={customStyles}>
        <h1>{dayjs().add(6, "day").format("YYYY-MM-DD")}</h1>
        <List
      sx={{
        width: '90%',
      }}
    >
        {data?.challenge == null ? (
          null
        ) : (
          data.challenge.tasks.map((task) => {
            const takss = seventhDisplayed(data.challenge.startDate, task);
            if (takss.length === 0) {
              return null
            }
            return (
              <>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                <UpcomingIcon  color="action"  />
                </ListItemAvatar>
                <ListItemText primary={takss}  />
              </ListItem>
              <Divider variant="inset" component="li" />
              </>
            )
          })
        )}
    </List>
      </Paper>
  </div>
    </main>
  );
};

export default TODO;
