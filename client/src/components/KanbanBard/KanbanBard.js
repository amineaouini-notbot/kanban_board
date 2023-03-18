import axios from "axios";
import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import './KanbanBoard.css';
import AllLists from "./List/AllLists";
import { reatrieveLists } from "../../kanbanSlice";
const KanbanBoard = () => {
    let  openedBoards  = useSelector(state => state.kanban.openedBoard);
    let lastOpened = openedBoards[openedBoards.length-1]
    let openedBoard = useSelector(state => state.kanban.boards[lastOpened.index]) || 1;
    let [listsRetrieved, isRetrieved] = useState(false);
    let dispatch = useDispatch();
    if (!listsRetrieved){
        axios.get('/api/lists/retrieve/' + openedBoard.id)
        .then(res=>{
            console.log(res)
            isRetrieved(true);
            dispatch(reatrieveLists({lists: res.data, BIndex: lastOpened.index}))
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