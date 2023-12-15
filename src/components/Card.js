import React from 'react'
import MiniCard from './MiniCard'
import '../css/Card.css'
export default function Card() {
  return (
    <div className='card'>
      <MiniCard />
      <MiniCard />
      <MiniCard />
      <MiniCard />
    </div>
  )
}
