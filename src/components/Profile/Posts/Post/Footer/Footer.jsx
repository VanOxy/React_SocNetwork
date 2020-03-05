import React from "react";
import s from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={s.postFooter}>
            <button>Like</button>
            <button>Comment</button>
            <button>Share</button>
        </div>
    );
}
export default Footer;