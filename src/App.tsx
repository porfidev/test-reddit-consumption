import React, { useEffect, useState } from "react";
import "./App.css";
import PostsPublished from "./PostsPublished";
import RedditAPI from "./services/RedditAPI";
import {Post} from './types/Post';

const redditAPI: RedditAPI = RedditAPI.getInstance();

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    (async function requestPosts() {
      const results = await redditAPI.fetchPosts();
      const posts = results.data.children.map(post => post as Post);
      setPosts(posts);
    })();
  }, []);
  return (
    <div className="App">
      <PostsPublished posts={posts} />
      <button>Next</button>
    </div>
  );
}

export default App;
