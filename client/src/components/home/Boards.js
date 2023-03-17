import React from "react";
import './Boards.css';
import { div, Link, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openBoard } from "../../kanbanSlice";

const Boards = (props) => {
    const {id, index} = props;
    const dispatch = useDispatch();
    const onOpen = ()=>{
        
        dispatch(openBoard({id, index}));
        // return (<Navigate to='/board'></Navigate>)

    }
    return (
        <div id="boards" >

            <Link  to={`/board`} onClick={onOpen}>
                <div className="board">
                    <p>{props.boardName}</p>
                </div>

            </Link >
        </div>
    )
}

export default Boards;