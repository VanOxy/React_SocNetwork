import React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";


const Dialogs = (props) => {
    let dialogs = [];
    let messages = [];

    let stringGenregator = (length) => {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    for (let index = 0; index <5; index++){
        dialogs.push(<Dialog text={index} />);
        messages.push(<Dialog text={stringGenregator(70)} />);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs}
            </div>
            <div className={s.messages}>
                {messages}
            </div>
        </div>
    );
}
export default Dialogs;