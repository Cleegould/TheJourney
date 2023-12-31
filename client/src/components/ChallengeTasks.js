import React from 'react'
import Button from '@mui/material/Button';
import {useMutation} from '@apollo/client';
import { REMOVE_TASK } from '../utils/mutations';

export default function ChallengeTasks({tasks}) {
    console.log('ChallengeTask: ', tasks)
    const frequencyKey = [
      'Daily',
      'Every Other Day',
      'Every Third Day',
      'Every Fourth Day',
      'Every Fifth Day',
      'Every Sixth Day',
      'Once a Week'
    ]

    const [removeTask, { error, data }] = useMutation(REMOVE_TASK);

  return (
    <div>
      {tasks.map((item, index) => (
        <div key={index}>
          <p>{item.taskTitle}</p>
          <p>{item.description}</p>
          <p>{frequencyKey[(item.frequency)-1]}</p>
          <Button sx={{ marginBottom: '10px', backgroundColor:'black', color: "#E5AB24"}} variant="contained" onClick={async(event) => {
            event.preventDefault()
            const _id = item._id;
            console.log('const id: ', _id)
            try {
              const response = await removeTask({ variables: { _id } });
              console.log(response);
            } catch (err) {
            console.error(err);
            }
            window.location.reload();
          }}>Delete</Button>
          <br />
        </div>
      ))}
    </div>
  )
}
