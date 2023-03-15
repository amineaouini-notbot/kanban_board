import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import './KanbanBoard.css';
import AllLists from "./List/AllLists";
const KanbanBoard = () => {
    let  id  = useSelector(state => state.kanban.openedBoard);
    let board = useSelector(state => state.kanban.boards);
    console.log(id ) 
    return ( <div>aaaaaa</div>)
    // (<div>
    //         <div id="board_title">
    //         <h2>{name}</h2>
    //         </div>
    //         <AllLists BIndex={id}></AllLists>
    //         </div >) 
        
    
}


export default KanbanBoard;