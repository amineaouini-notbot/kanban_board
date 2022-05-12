import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import CreateList from "./CreateList/CreateList";
import List from "./List/List";
import './KanbanBoard.css';
const KanbanBoard = () => {
    let { id } = useParams();

    let board = useSelector(state => state.kanban.boards[id]);
    let { name, lists } = board;
    return (
        <div>
            <h2>{name}</h2>
            <div id="content">
                {lists.map((list, LIndex) => <List name={list.name} LIndex={LIndex} BIndex={id} />)}

            </div>
            <CreateList />
        </div>
    )
}

export default KanbanBoard;