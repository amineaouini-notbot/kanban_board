import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import CreateList from "./CreateList";

const KanbanBoard = () => {
    let { id } = useParams();

    let board = useSelector(state => state.kanban.boards[id]);
    console.log(board)
    let { name, lists } = board;
    return (
        <div>
            <h2>{name}</h2>
            <CreateList />
        </div>
    )
}

export default KanbanBoard;