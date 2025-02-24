import React, { use } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./recipes.css";

export function Activity(props) {
  return (
    <aside id="users">
      <span>User: {props.userName}</span>
      <ul>
        <li>Susan just added Crepes</li>
        <li>Jason just added Apple Fritter</li>
      </ul>
    </aside>
  );
}
