import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
    let postsDataElements =
        props.postsData.map(posts => <Post message={posts.message} count={posts.count}/>)
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
                   { props.postData}
                </div>
            </div>
        </div>
    )
}
export default MyPosts;



 
