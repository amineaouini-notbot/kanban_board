import React, { useState } from "react";
import './popup.css'
import { addBoard } from "../../kanbanSlice";
import { useDispatch } from "react-redux";

const BNPopUp = (props) => {
    const dispatch = useDispatch();
    const [kanbanName, setName] = useState('');
    const handleChange = (e) => setName(e.target.value)
    return (
        <div className='popup'>
            <div className='popup_inner'>
                <button id="close_popup" onClick={props.closePopup}>x</button>
                <form>
                    <input onChange={handleChange} placeholder="Write you board name"></input>
                    <button onClick={() => {
                        dispatch(addBoard({ name: kanbanName }))
                        props.closePopup()
                    }}>Create</button>
                </form>
            </div>
        </div>
    )
}

export default BNPopUp;