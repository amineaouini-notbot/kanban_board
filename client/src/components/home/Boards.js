import React from "react";
import './Boards.css';

const Boards = (props) => {
    // const redirect = ()=> props.redirect(props.id)
    return (
        <div className="board">
            <p>{props.boardName}</p>
        </div>
    )
}

export default Boards;