import React from "react";
import s from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={s.postFooter}>
            <button className={s.like}>Like</button>
            <button className={s.comment}>Comment</button>
            <button className={s.share}>Share</button>
        </div>
    );
}
export default Footer;