import React from "react";
import { Link } from "react-router-dom";

export default function RootHeader() {
  return (
    <nav className="root-header">
      <Link to="/">
        <img
          src="src/assets/와글와글_logo.png"
          alt="와글와글로고"
          className="logo"
        />
      </Link>
      <Link to="/">
        <h1>와글와글</h1>
      </Link>
      <div className="root-header-button-box">
        <Link to="/my-page">
          <button>마이페이지</button>
        </Link>
        <Link to="/login">
          <button>로그인</button>
        </Link>
      </div>
    </nav>
  );
}
