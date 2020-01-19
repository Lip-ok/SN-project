import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redax/profile-reducer";






const MyPosts = (props) => {
    let postsDataElements = props.postsData.map(posts => <Post message={posts.message} count={posts.count}/>)
    let newPostElement = React.createRef();



    let onAddPost = () => {
        props.addPost();


    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);

    }

    return (

        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div>
                <div className={s.posts}>
                    {postsDataElements}
                </div>
            </div>
        </div>
    )
}
export default MyPosts;



 
