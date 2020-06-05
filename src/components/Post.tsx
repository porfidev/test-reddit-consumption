import React from "react";
import { Post as PostType } from "../types/Post";

const Post = (post: PostType) => {
  const { data } = post;
  return (
    <>
      {!post ? (
        <h1>Undefined Post</h1>
      ) : (
        <div className="post">
          <div className="post-data">
            <div className="thumbnail">
              <div
                className="pic"
                style={{ backgroundImage: `url(${data.thumbnail})` }}
              />
            </div>
            <div className="info">
              <div className="title">
                {data.title.length > 126 ? (
                  <h3>{`${data.title.substring(0, 126)}...`}</h3>
                ) : (
                  <h3>{data.title}</h3>
                )}
              </div>
              <p>
                Posted by: {data.author} <br /> Posted on:{" "}
                {new Date(
                  parseFloat(data.created_utc) * 1000
                ).toLocaleDateString()}
              </p>
              <p>Comments: {data.num_comments}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Post;
