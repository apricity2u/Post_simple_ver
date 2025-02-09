import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <Link to='/posts'>
      <div className='text-bigger'>와글와글 떠들러 가기</div>
    </Link>
  )
}