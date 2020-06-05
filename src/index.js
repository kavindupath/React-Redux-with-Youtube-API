import React from "react";
import ReactDOM from "react-dom";

import SearchBar from "./components/search_bar";

const API_KEY="AIzaSyANC10nL76dNiHfDxKQe-4S7Zb3Onls7Jo";

const App=()=>{
return (
<div><SearchBar/> </div>);
}

ReactDOM.render(<App/>,document.querySelector(".container"));

//  </App/> creates an instance of App and return to ReactDOM