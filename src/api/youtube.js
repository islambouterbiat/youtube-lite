import axios from "axios";

export default axios.create({
  baseUrl: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 6,
    key: "AIzaSyCKUWxm7MrdqCJdarJQcvQzL0e2jGTlhAU",
  },
});
