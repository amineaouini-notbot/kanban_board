import React, { useState } from "react";
import { useSelector } from "react-redux";
import BNPopUp from "./BoardNamePopUp";
import './home.css';

const Home = () => {
    let boards = useSelector(state => state.kanban.boards);
    const [showPopUp, togglePopup] = useState(false);
    let togglePopUp = () => togglePopup(!showPopUp);
    return (
        <div>
            <div className="content" id="create_board" onClick={togglePopUp}><p>Create a new Board +</p></div>
            {showPopUp ? <BNPopUp closePopup={togglePopUp} /> : null}
        </div>
    )
}

export default Home;