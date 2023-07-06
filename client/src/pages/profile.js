import React from 'react'
import GoalListItem from '../components/GoalListItem'

export default function Profile(props) {
  const user = props;
  console.log(user)
  
  return (
    <div>
      <h1>{user.username}</h1>
      <GoalListItem 
      name = {user.goalData.goal} 
      description = {user.goalData.description} 
      startDay = {user.goalData.startDay}
      />
      
    </div>
  )
}
