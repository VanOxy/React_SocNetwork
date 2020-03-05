import  React  from 'react';
import s from './Navbar.module.css';

const Navbar = (props) => {
    return (
        <div className={s.nav}>
            <div><a href="/profile">Profile</a></div>
            <div><a href="/dialogs">Dialogs</a></div>
            <div><a href="/">Photos</a></div>
            <div><a href="/">Videos</a></div>
        </div>
    );
}

export default Navbar;