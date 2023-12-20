import { useState } from "react"

export default function Counts() {

    

const [count,setCount]=useState(6)
function handle_count_down() {
    setCount(count - 1)
    
}
function handle_count_up() {
    setCount(count +1)
}
console.log("render counts")
return (
      <div>
        
        <p>number : {count}</p>
        <button onClick={handle_count_down}>down</button>
        <button onClick={handle_count_up}> up </button>
      </div>
    )
  }