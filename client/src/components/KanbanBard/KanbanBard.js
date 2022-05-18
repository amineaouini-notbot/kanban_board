import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import CreateList from "./CreateList/CreateList";
import List from "./List/List";
import './KanbanBoard.css';
const KanbanBoard = () => {
    let { id } = useParams();

    // @ts-ignore
    let board = useSelector(state => state.kanban.boards[id]);
    let { name, lists } = board;
    return (
        <div>
            <div id="board_title">
                <h2>{name}</h2>
            </div>
            <div id="content">
                <div id="lists">
                    {lists.map((list, LIndex) => <List key={LIndex} LIndex={LIndex} BIndex={id} />)}

                </div>

                <CreateList />
            </div>
        </div>
    )
}

export default KanbanBoard;