import React from "react";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Character = () => {
  const params = useParams();
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.loadPersonaje(params.theid);
  }, []);
  console.log(store.personaje);

  return (
    <div className="card-horizontal d-flex">
      <div className="card-horizontal">
        <div className="col-md-4">
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${params.theid}.jpg`}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="card-body">
          <h4 className="card-title">{store.personaje.name}</h4>
          <p className="card-text justify-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            sed fermentum dui, vitae venenatis dolor. Nam tincidunt elit sit
            amet semper aliquam. Aenean purus eros, blandit sed ullamcorper eu,
            blandit a nulla. Etiam viverra, urna in ornare tristique, odio nulla
            rutrum lorem, aliquam vestibulum nibh lectus non ex. Fusce eu erat
            lorem. Mauris in mauris sit amet elit malesuada accumsan. Vivamus ut
            rhoncus ante. Integer convallis ante gravida eros dapibus maximus.
            Phasellus at justo eu purus interdum eleifend. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Nunc luctus ligula iaculis,
            placerat velit vitae, consequat velit. Mauris sed mauris rutrum,
            dapibus sapien iaculis, finibus lacus. Etiam venenatis fringilla
            massa, consequat sollicitudin felis tempor eu. Ut suscipit eu nunc
            sit amet placerat. Etiam lacinia purus sit amet est ultrices, ac
            viverra elit rhoncus. Quisque tempor leo consectetur aliquet
            sodales.
          </p>

          <hr className="hrStyle" style={{ color: "red" }} />
        </div>
      </div>
      <div className="card-footer"></div>
    </div>
  );
};
