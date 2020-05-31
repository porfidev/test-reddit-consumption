import React, {useEffect, useState} from 'react';
import './App.css';
import PostsPublished from './PostsPublished';
import RedditAPI from './services/RedditAPI';
import {Post} from './types/Post';

const redditAPI: RedditAPI = RedditAPI.getInstance();

function App() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [current, setCurrent] = useState<string | null>(null);
    const [after, setAfter] = useState<string | null>(null);
    const [before, setBefore] = useState<string | null>(null);

    useEffect(() => {
        console.log('using effect', current);
        (async function requestPosts() {
            const results = await redditAPI.fetchPosts(10, current);
            const posts = results.data.children.map(post => post as Post);
            setPosts(posts);
            setAfter(results.data.after);
            setBefore(results.data.before);
        })();
    }, [current]);
    return (
        <div className="App">
            <PostsPublished posts={posts}/>
            {after && <button onClick={e => setCurrent(after)}>Next</button>}
            {before && <button onClick={e => setCurrent(before)}>Back</button>}
        </div>
    );
}

export default App;
