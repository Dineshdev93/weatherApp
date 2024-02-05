import React, { useState } from 'react'

export default function Timer() {
  const [time,setTime] = useState( Date())
  return (
    <div>
         <h1>{time}</h1>
    </div>
  )
}
