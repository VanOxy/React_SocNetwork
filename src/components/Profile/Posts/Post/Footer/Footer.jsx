import React from "react";
import s from "./Footer.module.css";

const Footer = (props) => {
    return (
        <div className={s.postFooter}>
            <div>Like</div>
            <div>Comment</div>
            <div>Share</div>
        </div>
    );
}
export default Footer;