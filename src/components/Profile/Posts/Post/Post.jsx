import React from "react";
import s from "./Post.module.css";
import Title from "./Title/Title";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";

const Post = (props) => {
    return (
        <div className={s.post}>
            <Title text={props.text}/>
            <hr />
            <Content />
            <hr/>
            <Footer />
            <div style={{height: "30px"}}></div>
        </div>
    );
}
export default Post;