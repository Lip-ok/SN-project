import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Preloader/Preloader";

const ProfileInfo = (props) => {

    if(!props.profile){
        return <Preloader/>
    }
    return <div>
        <div >
            <img
                src='https://avatars.mds.yandex.net/get-pdb/1818344/c68f0abd-d0ec-4da5-a0c1-da26a282b0e6/s1200?webp=false'/>
        </div>
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large}/>
            <div>
                <span>{props.profile.fullName}</span>
            </div>
            <span>Status: {props.profile.aboutMe}</span>
            <div>
                <span>My contacts:</span>
                    <div>
                        <span>VK.com</span>
                    </div>
            </div>
            <span>description</span>
        </div>
    </div>
}
export default ProfileInfo;

