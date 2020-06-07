import React from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/Video_List";
import VideoDetails from "./components/Video_details";
const API_KEY = "AIzaSyD_f0xwQXKuDUM0IQK_XsEH1CvQ9JS5leA";


class App extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            videos: []

        };

        YTSearch({ key: API_KEY, term: "surfboards" }, (data) => {
            this.setState({ videos: data });
        });

    }


    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetails video={this.state.videos[0]}/>
                <VideoList videos={this.state.videos} />
            </div>
        );
    }

}


ReactDOM.render(<App />, document.querySelector(".container"));

//  </App/> creates an instance of App and return to ReactDOM