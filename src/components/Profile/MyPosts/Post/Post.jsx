import React from 'react';


import s from './Post.module.css';


const Post = (props) => {
  

  return (


    <div className={s.item}>
      <img src='https://vignette.wikia.nocookie.net/avatar-2009-movie/images/f/f5/Avatar-1701_%281%29.jpg/revision/latest?cb=20160202004936' />
      {props.message}
          <div>
<span>like {props.count}</span>
      </div>
    </div>


  )
}
export default Post;

