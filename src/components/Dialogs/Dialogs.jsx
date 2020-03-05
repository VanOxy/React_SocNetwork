import React from "react";
//import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";

const Dialogs = (props) => {
    let dialogs = [];

    for (let index = 0; index <5; index++){
        dialogs.push(<Dialog text={index} />);
    }
    
    return dialogs;
}
export default Dialogs;