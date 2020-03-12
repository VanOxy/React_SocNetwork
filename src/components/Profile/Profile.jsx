import React from "react";
import s from "./Profile.module.css";
import Posts from "./Posts/Posts";
import {textChangedActionCreator} from "../../redux/store";

const Profile = (props) => {
    const newPostElement = React.createRef();
    const txtValue = props.state.profilePage.textarea;

    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(textChangedActionCreator(text));
    }

    return (
        <div>
            <img src="https://www.pngitem.com/pimgs/m/285-2855629_profile-clipart-hd-png-download.png" alt="profile" className={s.ava}/>
            
            <div style={{margin: '1rem'}}>
                <textarea value={txtValue} onChange={onPostChange} ref={newPostElement}></textarea>
                <div>
                    <button>Add Post</button>
                </div>
            </div>

            <Posts />
        </div>
    );
}

export default Profile;