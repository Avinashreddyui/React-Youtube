/**
 * Created by avvinash on 8/18/2017.
 */
import React from "react";

class videoDetail extends React.Component{
    render(){
        if(!this.props.data){
            return <div>Loading...</div>
        }
        const videoId=this.props.data.id.videoId;
        const Url=`https://www.youtube.com/embed/${videoId}`;
        return(
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe src={Url} className="embed-responsive-item">

                  </iframe>
                </div>
                <div className="details">
                    <div>{this.props.data.snippet.title}</div>
                    <div>{this.props.data.snippet.description}</div>
                </div>
            </div>
        )
    }
}
export default videoDetail;