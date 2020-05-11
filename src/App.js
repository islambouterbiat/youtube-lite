import React, { Component } from "react";
import youtube from "./api/youtube";
import { SearchBar, SelectedVideo, VideoList } from "./components";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  handleSubmit = async (searchQuery) => {
    console.log(searchQuery);
    const {
      data: { items },
    } = await youtube.get("/search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyCKUWxm7MrdqCJdarJQcvQzL0e2jGTlhAU",
        q: searchQuery,
      },
    });
    console.log(items);
    this.setState({ videos: items, selectedVideo: items[0] });
  };

  render() {
    const { videos, selectedVideo } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <SearchBar onSubmit={this.handleSubmit} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 col-11">
            <SelectedVideo video={selectedVideo} />
          </div>
          <div className="col-md-4 col-10">
            <VideoList videos={videos} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
