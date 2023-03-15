import React from "react";
import { useSelector } from "react-redux";
import './KanbanBoard.css';
import AllLists from "./List/AllLists";
const KanbanBoard = () => {
    let  boardIndex  = useSelector(state => state.kanban.openedBoard.index);
    let name = useSelector(state => state.kanban.boards[boardIndex].name);
    return (<div>
                <div id="board_title">
                    <h2>{name}</h2>
                </div>
                <AllLists BIndex={boardIndex}></AllLists>
            </div >
            ) 
        
    
}


export default KanbanBoard;