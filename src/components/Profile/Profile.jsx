import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';


const Profile = () => {
  return <div>
    <div>
      <img src='https://avatars.mds.yandex.net/get-pdb/1818344/c68f0abd-d0ec-4da5-a0c1-da26a282b0e6/s1200?webp=false' />
    </div>
    <div>
      ava + description
    </div>
   <MyPosts />
     
  </div>
}
export default Profile;

