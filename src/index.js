//import the REACT and ReactDOM dependencies
import React from "react";
import ReactDOM from "react-dom";

//create a react component
/* 
a componenet is a function or a class 
    produces HTML to show the user - using jsx
    handles feedback from the user - using eventHandlers
*/
function getButtonText() {
  return "Click On Me!";
}

const App = () => {

  const buttonText = "Click Me!";
  return (
    <div>
      <label className="label" for="name">
        Enter Name
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {getButtonText()}
      </button>
    </div>
  );
};

//take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));

/*
JSX vs HTML
    adding custom styling to an element uses different syntax
    adding a class to an element uses different syntax
    JSX can reference JS variables
*/
