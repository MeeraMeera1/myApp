//import the REACT and ReactDOM dependencies
import React from "react";
import ReactDOM from "react-dom";

//create a react component
/* 
a componenet is a function or a class 
    produces HTML to show the user - using jsx
    handles feedback from the user - using eventHandlers
*/
const App = () => {
  return <div>Hi There!</div>;
};

//take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));