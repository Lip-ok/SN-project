import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redax/profile-reducer";






const MyPosts = (props) => {
    let postsDataElements = props.postsData.map(posts => <Post message={posts.message} count={posts.count}/>)
    let newPostElement = React.createRef();



    let addPost = () => {
        props.dispatch(addPostActionCreator());

    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (

        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
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



 
