import React, { useState } from 'react'

export default function AddDate() {
    const [year,setYear]=useState('')
    const [age,setAge]=useState('')

    const [text,setText]=useState('')
    const [name,setName]=useState('')

    const handle_keyDown=(e)=>{if (e.key == ("Enter")) {
        setName(text)
        setAge(new Date().getFullYear() - year)
    }}



  return (
    <div>
       
  <div   onKeyDown={handle_keyDown}
   /*onKeyDown={
        e=>{if (e.key == ("Enter")) {
            setName(text)
            setAge(new Date().getFullYear() - year)
        }}
       }*/ >
  <p>Input Ur Name :<input 
       type='text'
       placeholder='input ur name'
       value={text}
       onChange={(e)=>setText(e.target.value)}
    //    onKeyDown={
    //     e=>{if (e.key == ("Enter")) {
    //         setName(text)
    //     }}
    //    }  //cách 1 chèn thẳng vào
       /></p>

       <p>Input Ur Year :<input 
placeholder='input ur year'
type='number'
value={year}
onChange={(e)=>setYear(e.target.value)}
// onKeyDown={
//     e=>{
//         if (e.key == "Enter") {
//             setAge(new Date().getFullYear() - year)
//         }
//     }
// } //cách 1 chèn thẳng vào

/></p>
  </div>




<h1>Tên : {name}</h1>
<h2>Tuổi : {age}</h2>

    </div>
  )
}
