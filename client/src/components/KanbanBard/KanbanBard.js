import axios from "axios";
import React, {useState} from "react";
import { useSelector } from "react-redux";
import './KanbanBoard.css';
import AllLists from "./List/AllLists";
const KanbanBoard = () => {
    console.log(useSelector(state => state.kanban))
    let  openedBoards  = useSelector(state => state.kanban.openedBoard);
    let lastOpened = openedBoards[openedBoards.length-1]
    console.log(lastOpened)
    let openedBoard = useSelector(state => state.kanban.boards[lastOpened.index]) || 1;
    let [listsRetrieved, isRetrieved] = useState(false);
    if (!listsRetrieved){
        axios.get('/api/lists/retrieve', {BId: openedBoard.id})
        .then(res=>{
            console.log(res)
        })
        .catch(err => {throw err});
    }
    return openedBoard.name ? (<div>
        <div id="board_title">
            <h2>{openedBoard.name}</h2>
        </div>
        <AllLists BIndex={lastOpened.index}></AllLists>
    </div >) : (<div>ddd</div>)
    
        
    
}


export default KanbanBoard;