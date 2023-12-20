import React, { useState } from 'react'

export default function ChangeText() {
    const [name, setName]=useState("xxx")
    function handle_ChangeT(e) {
        setName(e.target.value);//???=e.target.value
    }


    const [a, setA]=useState("")
    const [b, setB]=useState("")
    const [all, setAll]=useState("0")
    
  return (
    <div>
        <input type='number'  />
        <input type='text' value={name} onChange={handle_ChangeT}/>
        <p>name : {name}</p>
        ChangeText
        
        
        
        
        <label>input a :</label><input type='number' value={a} onChange={(e)=>setA(e.target.value)} />
        <label>input b :</label><input type='number' value={b} onChange={(e)=>setB(e.target.value)}/><br/>
        <button onClick={()=>setAll(`${a} + ${b} = ${a*1 +b*1}`)}>cong</button>
        <button onClick={()=>setAll(`${a} - ${b} = ${a - b}`)}>tru</button>
        <button onClick={()=>setAll(`${a} * ${b} = ${a * b}`)}>nhan</button>
        <button onClick={()=>setAll(`${a} / ${b} = ${a / b}`)}>chia</button>

        <p>
            {all}
        </p>


        </div>
  )
}
