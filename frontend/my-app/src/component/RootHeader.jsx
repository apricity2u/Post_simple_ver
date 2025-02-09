import React from 'react'

export default function RootHeader() {
  return (
    <div className='root-header'>
        <img src="src/assets/와글와글_logo.png" alt="와글와글로고" className='logo'/>
        <h1>와글와글</h1>
        <div className='root-header-button-box'>
            <button>마이페이지</button>
            <button>로그인</button>
        </div>
    </div>
  )
}
