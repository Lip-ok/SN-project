import s from "../Navbar.module.css";
import {NavLink} from "react-router-dom";
import React from "react";



const Friend = () => {
    return (
        <div>

            <div className={s.friends}>
                <NavLink to='/friends' activeClassName={s.active}>Friends</NavLink>
                <div className={s.item}>
                    <img src="https://vignette.wikia.nocookie.net/avatar-2009-movie/images/f/f5/Avatar-1701_%281%29.jpg/revision/latest?cb=20160202004936"/>
                    <img src="https://vignette.wikia.nocookie.net/avatar-2009-movie/images/f/f5/Avatar-1701_%281%29.jpg/revision/latest?cb=20160202004936"/>
                    <img src="https://vignette.wikia.nocookie.net/avatar-2009-movie/images/f/f5/Avatar-1701_%281%29.jpg/revision/latest?cb=20160202004936"/>
                </div>

            </div>
        </div>
    )
}
export default Friend;