
import "../../styles/home.css";
import { Card } from "../component/card";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";



export const Home = () => {
  const { store, actions } = useContext(Context);
  console.log(store.characters)
  
  return (
    <div className="ms-5 px-2">
      <h1>Characters</h1>
      <div className="overflow-auto">
        <div className="d-flex">
          {store.characters.map((element)=>{
            return(<Card name={element.name} type="character" />)
          })}
          
        </div>
      </div>
      <h1 className="mt-4">Planets</h1>
      <div className="overflow-auto">
        <div className="d-flex">
        {store.characters.map((element)=>{
            return(<Card name={element.name} type="planet" />)
          })}
        </div>
      </div>
    </div>
  );
};
