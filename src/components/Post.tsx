import React from "react";
import { Post as PostType } from "../types/Post";


const Post = (post: PostType) => {

    const { data } = post;
    return (
        <div className="posts">
            {!post ? (
                <h1>Undefined Post</h1>
            ) : (
                <div className="post">
                    <h3>{ data.title }</h3>
                    <img src={data.thumbnail} />
                    <p>{ data.author }</p>
                    <div>{ data.created_utc }</div>
                    <div>comments: { data.num_comments }</div>
                </div>
            )}
        </div>
    );
};

export default Post;
