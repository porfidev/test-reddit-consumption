import React from "react";
import { Post as PostType } from "./types/Post";
import Post from "./components/Post";

const PostsPublished = ({ posts }: { posts: PostType[] }) => {
  return (
    <div className="posts">
      {posts.length > 0 &&
        posts.map((post: PostType, index: number) => {
          return <Post key={index} {...post} />;
        })}
    </div>
  );
};

export default PostsPublished;
