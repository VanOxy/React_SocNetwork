import React from "react";
import s from "./Title.module.css";

const Title = (props) => {
    return (
        <div className={s.postTitle}>
            <img alt="img" src="https://pngimage.net/wp-content/uploads/2018/06/publication-png.png" className={s.postTitleImage}/>
            <div className={s.postTitleText}>
                 Post number: {props.text} 
            </div>
        </div>
    );
}
export default Title;