import React from "react";
import { useSelector } from "react-redux";
import './KanbanBoard.css';
import AllLists from "./List/AllLists";
const KanbanBoard = () => {
    console.log(useSelector(state => state.kanban))
    let  BIndex  = useSelector(state => state.kanban.openedBoard.index);
    console.log(BIndex)
    let openedBoard = useSelector(state => state.kanban.boards[BIndex]) || 1;
    
    return openedBoard.name ? (<div>
        <div id="board_title">
            <h2>{openedBoard.name}</h2>
        </div>
        <AllLists BIndex={BIndex}></AllLists>
    </div >) : (<div>ddd</div>)
    
        
    
}


export default KanbanBoard;