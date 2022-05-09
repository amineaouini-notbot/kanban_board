import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const KanbanBoard = () => {
    let { id } = useParams();
    let board = useSelector(state => state.kanban.boards[id]);
    let { name, lists } = board;
    return (
        <div>
            <h2>{name}</h2>
        </div>
    )
}

export default KanbanBoard;