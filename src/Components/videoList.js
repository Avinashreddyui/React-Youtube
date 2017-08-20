/**
 * Created by avvinash on 8/18/2017.
 */
import React from "react";
import VideoListItem from "./videoListItem";

class videoList extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        const videoItems=this.props.videos.map((data)=><VideoListItem
            onVideoSelect={this.props.onVideoSelect}
            key={data.etag}
            data={data}
        />);
        return(
            <div>
                {this.props.videos.length}
            <ul className="col-md-4 list-group">
                {videoItems}
            </ul>
            </div>
        )
    }
}


export default videoList;