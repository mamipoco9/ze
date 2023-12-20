import React, { useState } from 'react'

export default function CountDown() {
const [count, setDown]=useState(6)
function handle_count_d() {
    setDown(count - 1)
}


  return (
    <div>CountDown : {count}
    <button onClick={handle_count_d}> Down</button></div>
  )
}
