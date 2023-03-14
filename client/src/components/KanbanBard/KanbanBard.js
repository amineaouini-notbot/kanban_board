import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import './KanbanBoard.css';
import AllLists from "./List/AllLists";
const KanbanBoard = () => {
    let  id  = sessionStorage.getItem('boaaaaaaaaaaaaaaaardIddddddddddddddddddddddddD____');
    let board = useSelector(state => state.kanban.boards[id]);
    let { name } = board;
    console.log(id + '+ ' + board)
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