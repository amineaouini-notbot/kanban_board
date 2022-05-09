import React, { useState } from "react";
import './popup.css'
import { addBoard } from "../../kanbanSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const BNPopUp = (props) => {
    const nextBoard = useSelector(state => state.kanban.boards).length
    const dispatch = useDispatch();
    const [kanbanName, setName] = useState('');
    const handleChange = (e) => setName(e.target.value)
    return (
        <div className='popup'>
            <div className='popup_inner'>
                <button id="close_popup" onClick={props.closePopup}>x</button>
                <form>
                    <input onChange={handleChange} placeholder="Write you board name"></input>
                    <Link id="create" to={`/board/` + nextBoard} onClick={() => {
                        dispatch(addBoard({ name: kanbanName }))
                        props.closePopup()
                    }}>Create</Link >
                </form>
            </div>
        </div>
    )
}

export default BNPopUp;