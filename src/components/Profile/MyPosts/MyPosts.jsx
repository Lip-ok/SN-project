import React from 'react';


import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
  return (

    <div >
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div >
        <div className={s.item}>
     <Post message='Hello Egor' count='15'/>
     <Post message='Hello Sasha' count='20'/>
     
        </div>
      </div>
    </div>
  )
}
export default MyPosts;



 
