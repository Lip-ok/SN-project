import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
const UPDATE_POST_CHANGE = "UPDATE-POST-CHANGE";
const ADD_POST = "ADD-POST";

const MyPosts = (props) => {
    let postsDataElements = props.postsData.map(posts => <Post message={posts.message} count={posts.count}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.dispatch({type: ADD_POST, newText: text});

    }

    let onPostChange = () => {
        let text = newPostElement.current.value;

        props.dispatch({type: UPDATE_POST_CHANGE, newText: text});
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



 
