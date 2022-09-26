import React from "react";
import { Link } from "react-router-dom";

const Card = ({ type, name, theid }) => {
  return (
    <div className="card col-4 mx-3">
      <img
        src="https://www.prensalibre.com/wp-content/uploads/2019/11/luke-skywalker-644x362.jpg?quality=52
"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Link
          to={type === "character" ? "/character/"+theid : "/planet/"+theid}
          className="btn btn-primary"
        >
          Learn more!
        </Link>
        <button 
        
        href="#" className="btn btn-outline-primary float-end">
          <i className="fa fa-heart text-danger" />
        </button>
      </div>
    </div>
  );
};


export { Card };
