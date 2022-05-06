import React, { useState } from "react";
import { useSelector } from "react-redux";
import BNPopUp from "./BoardNamePopUp";
import './home.css';
import Boards from "./Boards";
const Home = () => {
    let boards = useSelector(state => state.kanban.boards);
    const [showPopUp, togglePopup] = useState(false);
    let togglePopUp = () => togglePopup(!showPopUp);
    return (
        <div>
            <div id="content">
                {boards.map((board, i) => <Boards boardName={board.name} id={i} />)}
                <div id="create_board" onClick={togglePopUp}><p>Create a new Board +</p></div>

            </div>
            {showPopUp ? <BNPopUp closePopup={togglePopUp} /> : null}
        </div>
    )
}

export default Home;