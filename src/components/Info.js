import React from 'react'
import"../css/Info.css"
export default function Info(props) {

    console.log(props)

    const{name,age,phone}=props



  return (
    <div> Info
        <h2 className='abc'>mot con dit</h2>
        <div >
        <p>name : {name}</p>
        <p>age : {age}</p>
        <p>phone : {phone}</p>
        </div>
    </div>
  )
}
