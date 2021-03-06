import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {MyPostReduxForm} from "./MyPostForm";


const MyPosts = (props) => {
    let postsDataElements = props.postsData.map(posts => <Post message={posts.message} count={posts.count}/>)



    const onSubmit = (value) => {
        props.addPost(value.newPost);
    }


    return (

        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <MyPostReduxForm onSubmit={onSubmit}/>
                <div className={s.posts}>
                    {postsDataElements}
                </div>
            </div>
        </div>
    )
}
export default MyPosts;



 
