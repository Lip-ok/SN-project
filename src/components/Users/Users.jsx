import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/image/userPhoto.jpg";
import {NavLink} from "react-router-dom";
import * as axios from "axios";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && styles.selectedPage}
                                 onClick={(e) => {
                                     props.onPageChanged(p);
                                 }}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <div>
                        <div>
                            <NavLink to={'/profile/' +  u.id} >
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                 className={styles.avatar}/>
                            </NavLink>
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                                            withCredentials: true,
                                            headers: {"API-KEY": "65b483b0-a6cb-4653-b206-8b756cad32cd"}
                                        }).then(response => {
                                            if(response.data.resultCode === 0){
                                                props.follow(u.id)
                                            }
                                        })


                                    }}>Follow</button>
                                    : <button onClick={() => {
                                        axios.post (`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{
                                            withCredentials: true,
                                            headers: {"API-KEY": "65b483b0-a6cb-4653-b206-8b756cad32cd"}
                                        }).then(response => {
                                           if(response.data.resultCode === 0){
                                               props.unfollow(u.id)
                                           }
                                        })


                                    }}>Unfollow</button>
                            }
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </div>
                    </div>

                </div>)
            }
        </div>
    )
}

export default Users;