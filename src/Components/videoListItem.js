/**
 * Created by avvinash on 8/18/2017.
 */
import React from "react";

class videoListItem extends React.Component {
 render(){
     const videoDetailsData=this.props.data;
     const imgUrl=videoDetailsData.snippet.thumbnails.default.url;
     const title=videoDetailsData.snippet.title;
     return (
         <li onClick={()=>this.props.onVideoSelect(videoDetailsData)} className="list-group-item">
             <div className="video-list media">
                <div className="media-left">
                    <img src={imgUrl} className="media-object"/>
                </div>
                 <div className="media-body">
                     <div className="media-heading">
                         {title}
                     </div>
                 </div>
             </div>
         </li>
 )
 }
}

export default videoListItem;