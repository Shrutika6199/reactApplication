import React from 'react'

const Dashboard = ({user}) => {
  return (
    <div>
      <h1>Heloo,welcome to dashboard</h1>
      <h1>Hi,{user.fname}</h1>
      <h1>Your Email:{user.mail}</h1>
    </div>
  )
}

export default Dashboard