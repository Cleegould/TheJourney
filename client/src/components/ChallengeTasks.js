import React from 'react'

export default function ChallengeTasks({tasks}) {
    console.log('ChallengeTask: ', tasks)
  return (
    <div>
        {tasks.taskTitle}
    </div>
  )
}
