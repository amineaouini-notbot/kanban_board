import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import BNPopUp from "./BoardNamePopUp";
import './home.css';
import Boards from "./Boards";
import axios from "axios";
import {retrieveAllBoards} from '../../kanbanSlice'
const Home = () => {
    let boards = useSelector(state => state.kanban.boards);
    const [showPopUp, togglePopup] = useState(false);
    const [isRetrieved, boardsRetrieved] = useState(false);
    let togglePopUp = () => togglePopup(!showPopUp);
    const dispatch = useDispatch();
    if (!isRetrieved){

        axios.get('/api/boards/retrieveall')
            .then(res =>{
                boardsRetrieved(true)
                dispatch(retrieveAllBoards({allBoards: res.data}))
            })
            .catch(err => { throw err })
            console.log(boards)
        }
    
    return (
        <div>
            <h1 id="title">kanban Board</h1>
            <div>

                <div id="boards_content" style={boards.length === 2 ? { griTemplateColumns: 'auto auto', marginLeft: '15%' } : {}}>
                    {boards[0] ? boards.map((board, i) => <Boards key={i} boardName={board.name} id={board.id} index={i} />) : <div></div>}
                </div>
                
                <div id="create_board" onClick={togglePopUp}><p>Create a new Board +</p></div>
            </div>
            {showPopUp ? <BNPopUp closePopup={togglePopUp} /> : null}
        </div>
    )
}
// let boards = useSelector(state => state.kanban.boards);
// class Home extends React.Component {
//     constructor(){
//         super()
//         this.state = {
//             showPopUp: false
//         }
//         this.togglePopUp.bind(this);
//     }
//     togglePopUp(){
//         this.setState({showPopUp: !this.state.showPopUp})
//     }

//     render(){
        
    
//         return (
//             <div>
//                 <h1 id="title">kanban Board</h1>
//                 <div id="boards_content">

//                     <div id="content" style={boards.length === 2 ? { griTemplateColumns: 'auto auto', marginLeft: '15%' } : {}}>
//                         {boards.map((board, i) => <Boards boardName={board.name} id={board.id} index={i} />)}
//                     </div>
                    
//                     <div id="create_board" onClick={this.togglePopUp}><p>Create a new Board +</p></div>
//                 </div>
//                 {this.showPopUp ? <BNPopUp closePopup={this.togglePopUp} /> : null}
//             </div>
//         )
//     }

// }

export default Home;