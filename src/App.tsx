import React, { useEffect, useState } from "react";
import "./App.css";
import PostsPublished from "./PostsPublished";
import RedditAPI from "./services/RedditAPI";
import {Post} from './types/Post';
import NextButton from './components/NextButton';

const redditAPI: RedditAPI = RedditAPI.getInstance();

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [afterPost, setAfterPost] = useState<string | null>(null);

  useEffect(() => {
    (async function requestPosts() {
      const results = await redditAPI.fetchPosts();
      const posts = results.data.children.map(post => post as Post);
      setPosts(posts);
      setAfterPost(results.data.after);
    })();
  }, []);
  return (
    <div className="App">
      <PostsPublished posts={posts} />
    </div>
  );
}

export default App;
