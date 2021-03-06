import React from "react";
import s from "./Dialog.module.css";
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={`/dialogs/${props.id ? props.id : '#'}`} activeClassName={s.active}>
                {props.text}
            </NavLink>
        </div>
    );
}
export default Dialog;