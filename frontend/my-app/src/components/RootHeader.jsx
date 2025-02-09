import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

export default function RootHeader() {
  const navigate = useNavigate();

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
        <Button
          onClick={() => {
            navigate("/my-page");
          }}
        >
          마이페이지
        </Button>
        <Button
          onClick={() => {
            navigate("/login");
          }}
        >
          로그인
        </Button>
      </div>
    </nav>
  );
}
