import React from "react";
import s from "./Dialog.module.css";

const Dialog = (props) => {
    return (
        <div className={s.dialog}>
            {props.text}
        </div>
    );
}
export default Dialog;