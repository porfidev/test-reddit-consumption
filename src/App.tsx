import React, { useEffect, useState } from "react";
import "./styles/main.scss";
import PostsPublished from "./PostsPublished";
import RedditAPI from "./services/RedditAPI";
import { Post } from "./types/Post";
import Loading from "./components/Loading/Loading";

const redditAPI: RedditAPI = RedditAPI.getInstance();

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [current, setCurrent] = useState<string | null>(null);
  const [after, setAfter] = useState<string | null>(null);
  const [before, setBefore] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async function requestPosts() {
      setIsLoading(true);
      const results = await redditAPI.fetchPosts(10, current);
      const posts = results.data.children.map((post) => post as Post);
      setPosts(posts);
      setAfter(results.data.after);
      setBefore(results.data.before);
      setIsLoading(false);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    })();
  }, [current]);
  return (
    <div className="App">
      {isLoading && <Loading />}
      {!isLoading && posts.length > 0 && <PostsPublished posts={posts} />}
      <div className="buttons-container">
        {after && (
          <button onClick={(e) => setCurrent(after)} disabled={isLoading}>
            Next
          </button>
        )}
        {before && <button onClick={(e) => setCurrent(before)}>Back</button>}
      </div>
    </div>
  );
}

export default App;
