import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import './KanbanBoard.css';
import AllLists from "./List/AllLists";
const KanbanBoard = () => {
    let { id } = useParams();
    let board = useSelector(state => state.kanban.boards[id]);

    let { name } = board;
    return (
        <div>
            <div id="board_title">
                <h2>{name}</h2>
            </div>
            <AllLists BIndex={id}></AllLists>
        </div >
    )
}


export default KanbanBoard;