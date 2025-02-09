import React from "react";
import { Outlet } from "react-router-dom";
import RootHeader from "../component/RootHeader";
import RootFooter from "../component/RootFooter";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <RootHeader></RootHeader>
      <Outlet></Outlet>
      <RootFooter></RootFooter>
    </div>
  );
}