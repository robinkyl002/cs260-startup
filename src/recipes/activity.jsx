import React, { use } from "react";
import { ActivityNotify } from "./activityNotifier";
import "bootstrap/dist/css/bootstrap.min.css";
import "./recipes.css";

export function Activity(props) {
  const [events, setEvent] = React.useState([]);

  React.useEffect(() => {
    ActivityNotify.addHandler(handleRecipeEvent);

    return () => {
      ActivityNotify.removeHandler(handleRecipeEvent);
    };
  }, []);

  function handleRecipeEvent(event) {
    setEvent((prevEvents) => {
      let newEvents = [event, ...prevEvents];
      if (newEvents.length > 2) {
        newEvents = newEvents.slice(1, 2);
      }
      return newEvents;
    });
  }

  function createMessageArray() {
    const messageArray = [];
    for (const [i, event] of events.entries()) {
      console.log(event.recipe);
      let message = ` added ${event.recipe}`;

      messageArray.push(
        <li key={i} className="recipe-event">
          <span className={"recipe-event"}>{event.from.split("@")[0]}</span>
          {message}
        </li>
      );
    }
    return messageArray;
  }

  return (
    <aside id="users">
      <span>User: {props.userName.split("@")[0]}</span>
      <ul id="recipe-messages">{createMessageArray()}</ul>
    </aside>
  );
}
