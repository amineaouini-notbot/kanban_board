import React from "react";
import './popup.css'

const BNPopUp = (props) => {
    return (
        <div className='popup'>
            <div className='popup_inner'>
                <button id="close_popup" onClick={props.closePopup}>x</button>
                <form>
                    <input placeholder="Write you board name"></input>
                    <button>Create</button>
                </form>
            </div>
        </div>
    )
}

export default BNPopUp;