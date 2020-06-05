import React from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/search_bar";

const API_KEY="AIzaSyD_f0xwQXKuDUM0IQK_XsEH1CvQ9JS5leA";

YTSearch({key:API_KEY, term : "camel"}, function(data){console.log(data);});

const App=()=>{
return (
<div><SearchBar/> </div>);
}

ReactDOM.render(<App/>,document.querySelector(".container"));

//  </App/> creates an instance of App and return to ReactDOM