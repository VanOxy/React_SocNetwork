import  React  from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <div className={s.nav}>
            <div>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" activeClassName={s.active}>Dialogs</NavLink>
            </div>
            <div>
                <a href="/">Photos</a>
            </div>
            <div>
                <a href="/">Videos</a>
            </div>
        </div>
    );
}

export default Navbar;