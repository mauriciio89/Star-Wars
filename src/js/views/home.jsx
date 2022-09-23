import React from "react";
import "../../styles/home.css";
import { Card } from "../component/card";

export const Home = () => (
  <div className="ms-5 px-2">
    <h1>Characters</h1>
    <div className="overflow-auto">
      <div className="d-flex">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
    <h1 className="mt-4">Planets</h1>
    <div className="overflow-auto">
      <div className="d-flex">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  </div>
);
