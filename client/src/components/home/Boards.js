import React from "react";
import './Boards.css';
import { Link } from "react-router-dom";
const Boards = (props) => {
    // const redirect = ()=> props.redirect(props.id)
    return (
        <div>

        <Link id="boards" to={`/board/` + props.id}>
            <div className="board">
                <p>{props.boardName}</p>
            </div>

        </Link >
        </div>
    )
}

export default Boards;