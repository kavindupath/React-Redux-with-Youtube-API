import React from "react";

const VideoListItems = (props) => {

    const IndivisualVideoListItem = props.video; // (each single video comes here)
    const imageUrl=IndivisualVideoListItem.snippet.thumbnails.default.url;
    return (
        <li onClick={()=> props.onVideoClick(IndivisualVideoListItem)} className="list-group-item">
            <div className=" video-list-media">
                <div className=" media-left">
                    <img className=" media-object" src={imageUrl} />
                </div>

                <div className="media-body">
                    <div className=" media-heading">{IndivisualVideoListItem.snippet.title}

                    </div>
                </div>
            </div>

        </li>


    );

};

export default VideoListItems