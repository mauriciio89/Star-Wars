import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Card = ({ type, name, theid }) => {
  const { store, actions } = useContext(Context);
  return (
    <div className="card col-4 mx-3">
      <img
        src={`https://starwars-visualguide.com/assets/img/${type === "character" ? "characters" : "planets"}/${theid}.jpg`}
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
          to={type === "character" ? "/character/" + theid : "/planet/" + theid}
          className="btn btn-primary"
        >
          Learn more!
        </Link>
        <button onClick={()=>actions.addFav({id:theid, name:name})} className="btn btn-outline-primary float-end">
          <i className="fa fa-heart text-danger" />
        </button>
      </div>
    </div>
  );
};

export { Card };
