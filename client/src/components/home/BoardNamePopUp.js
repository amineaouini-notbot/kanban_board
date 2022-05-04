import React from "react";
import './popup.css'

const BNPopUp = (props) => {
    return (
        <div className='popup'>
            <div className='popup_inner'>
                <button onClick={props.closePopup}>close me</button>
            </div>
        </div>
    )
}

export default BNPopUp;