import React, { Component } from "react";
import youtube from "./api/youtube";
import { SearchBar, SelectedVideo, VideoList } from "./components";

class App extends Component {
  state = {
    videos: [],
    searchQuery: "",
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query });
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <SearchBar value={searchQuery} onChange={this.handleSearch} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 col-11">
            <SelectedVideo />
          </div>
          <div className="col-md-4 col-10">
            <VideoList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
