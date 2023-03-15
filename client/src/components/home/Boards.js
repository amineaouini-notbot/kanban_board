import React from "react";
import './Boards.css';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openBoard } from "../../kanbanSlice";

const Boards = (props) => {
    const {id, index} = props;
    const dispatch = useDispatch();
    const onOpen = (e)=>{
        dispatch(openBoard({id, index}));
        
    }
    return (
        <div id="boards" key={props.id}>

            <Link  to={`/board`} onClick={onOpen}>
                <div className="board">
                    <p>{props.boardName}</p>
                </div>

            </Link >
        </div>
    )
}

export default Boards;