import React from "react";

const VideoDetails = (props) => {

    if(!props.FrontMainvideo){
        return <div> Loading.....</div>
    }

    const videoId = props.FrontMainvideo.id.videoId;
   // const url = "https://www.youtube.com/embed" + videoID;  //same as below. you can use this insted
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (

        <div className="video-detail col-md-8">

            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>

            <div className=" details">

                <div>{props.FrontMainvideo.snippet.title} </div>
                <div>{props.FrontMainvideo.snippet.description}</div>
            </div>

        </div>
    );

};


export default VideoDetails;