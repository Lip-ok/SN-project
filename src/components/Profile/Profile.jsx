import React from 'react';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";




const Profile = (props) => {
  return <div>
    <ProfileInfo/>
   <MyPosts postsData={props.postsData}/>
     
  </div>
}
export default Profile;

