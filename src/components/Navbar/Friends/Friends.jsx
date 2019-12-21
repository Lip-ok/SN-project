import s from "../Navbar.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import FriendIcon from "./FriendsIcon/FriendIcon";


const Friend = () => {
    return (
        <div>

            <div className={s.friends}>
                <div>
                    <NavLink to='/friends' activeClassName={s.active}>Friends</NavLink>
                </div>
                <FriendIcon/>
                <FriendIcon/>
                <FriendIcon/>
            </div>
        </div>
    )
}
export default Friend;