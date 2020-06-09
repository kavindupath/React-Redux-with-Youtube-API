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
            videos: [],
            selectedVideo: null

        };



        YTSearch({ key: API_KEY, term: "surfboards" }, (data) => {
            this.setState({
                videos: data,
                selectedVideo: data[0]
            });


        });

    }

selectedVideoMethod (selectedVideoParameter){
    this.setState({selectedVideo:selectedVideoParameter});
}


    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetails FrontMainvideo={this.state.selectedVideo} />
                {/*<VideoList onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })} videos={this.state.videos} />*/}
                <VideoList onVideoSelect={this.selectedVideoMethod.bind(this)} videos={this.state.videos} />

            </div>
        );
    }

}


ReactDOM.render(<App />, document.querySelector(".container"));

//  </App/> creates an instance of App and return to ReactDOM