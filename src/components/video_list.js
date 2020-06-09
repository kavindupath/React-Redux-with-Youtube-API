import React from "react";
import VideoListItems from "./video_list_items";

const VideoList = (props) => {
    const videoItems = props.videos.map((Eachvideo) => {
        return (
            
        <VideoListItems onVideoClick={props.onVideoSelect}  key={Eachvideo.etag}  video={Eachvideo} /> 
    )});

    return (
        <ul className="col-md-4 list-group">
            {videoItems}

        </ul>

    );
};

export default VideoList