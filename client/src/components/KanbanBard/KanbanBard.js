import React from "react";
import { useSelector } from "react-redux";
import './KanbanBoard.css';
import AllLists from "./List/AllLists";
const KanbanBoard = () => {
    console.log(useSelector(state => state.kanban))
    let  openedBoards  = useSelector(state => state.kanban.openedBoard);
    let lastOpened = openedBoards[openedBoards.length-1]
    console.log(lastOpened)
    let openedBoard = useSelector(state => state.kanban.boards[lastOpened.index]);
    
    return openedBoard.name ? (<div>
        <div id="board_title">
            <h2>{openedBoard.name}</h2>
        </div>
        <AllLists BIndex={lastOpened.index}></AllLists>
    </div >) : (<div>ddd</div>)
    
        
    
}


export default KanbanBoard;