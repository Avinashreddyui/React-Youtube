
import React from "react";
import ReactDOM from "react-dom";
import _ from "lodash"
import SearchBar from "./Components/searchBar";
import YTSearch from "youtube-api-search";
import VideoList from "./Components/videoList";
import VideoDetail from "./Components/videodetail"

const ApiKey="AIzaSyBAiqviwdHu1WadLVO7RI3gaz8YnoCvjZ8";



export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            videos:[],
            selectedVideo:null
        };
        this.videoSearch= this.videoSearch.bind(this);
    }
    videoSearch(term){
        YTSearch({key:ApiKey,term:term},(videos)=> {
            this.setState({
                videos:videos,
                selectedVideo:videos[0]
            });
        });
    }
    render() {
        const videoSearch=_.debounce((term)=>{this.videoSearch(term)},300);
        return (
            <div>
              <SearchBar onSerachTerm={videoSearch} />
                <VideoDetail data={this.state.selectedVideo} />
               <VideoList
                   onVideoSelect={(selectedVideo)=>this.setState({selectedVideo})}
                   videos={this.state.videos} />
            </div>
        )
    }
}

ReactDOM.render(
        <App/>,
    document.getElementById('app'));