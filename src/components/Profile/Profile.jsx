import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return (
        <div>
            <img src="https://www.pngitem.com/pimgs/m/285-2855629_profile-clipart-hd-png-download.png" alt="profile" className={s.ava}/>
            <MyPosts />
        </div>
    );
}
export default Profile;