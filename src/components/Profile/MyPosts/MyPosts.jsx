import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

let postsData = [
    {message: 'Hello bro!', count: 3},
    {message: 'Yo', count: 14},
    {message: 'WTF!?', count: 41},

]
let postsDataElements = postsData.map(posts => <Post message={posts.message} count={posts.count}/>)

const MyPosts = () => {
    return (

        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div >
                    <button>Add post</button>
                </div>
            </div>
            <div>
                <div className={s.posts}>
                   { postsDataElements}
                </div>
            </div>
        </div>
    )
}
export default MyPosts;



 
