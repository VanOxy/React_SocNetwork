import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <img src="https://www.pngitem.com/pimgs/m/285-2855629_profile-clipart-hd-png-download.png" alt="profile"/>
            <MyPosts />
        </div>
    );
}
export default Profile;