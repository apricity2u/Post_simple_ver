import React from "react";
import { Outlet } from "react-router-dom";
import RootHeader from "../components/RootHeader";
import RootFooter from "../components/RootFooter";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <RootHeader></RootHeader>
      <Outlet></Outlet>
      <RootFooter></RootFooter>
    </div>
  );
}