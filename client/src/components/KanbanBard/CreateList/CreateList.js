import React, { useState, useEffect, useRef } from "react";
import { addList } from "../../../kanbanSlice";
import { useDispatch, useSelector } from "react-redux";
import './CreateList.css';
import axios from "axios";
const CreateList = (props) => {
    let boardId = useSelector(state => state.kanban.openedBoard.id);
    let BIndex = useSelector(state => state.kanban.openedBoard.index);
    console.log(boardId)
    const dispatch = useDispatch();
    const [listName, setListName] = useState("");
    const [onCreate, setOnCreate] = useState(false);
    let handleCreate = async() => {
        if (listName.length > 0) {
            let res = await axios.post('/api/lists/create', {name: listName, boardId})
            console.log(res.data)
            dispatch(addList({ BIndex, name: listName })) // dispatch add list reducer
            setOnCreate(false) // return component it to add list button
        }
    }
    let addListRef = useRef(null);
    useEffect(() => {
        let handler = event => {
            if (!addListRef.current.contains(event.target)) { // on out of focus from add list
                setOnCreate(false) // return component it to add list button
            }
        }
        document.addEventListener('mousedown', handler)
        return () => { document.removeEventListener('mousedown', handler) }
    })
    return (<div id="add_list_container">
        {!onCreate ? (<div id="add_list" onClick={() => {
            setOnCreate(true)
            setListName("")
        }}><span>+ Add a list</span></div>) :
            <div id="on_add_list" ref={addListRef}>
                <input placeholder="Enter list name..." onChange={(e) => setListName(e.target.value)}></input>
                <div id="actions">
                    <button onClick={handleCreate}>Add list</button>
                    <span onClick={() => setOnCreate(false)}>x</span>
                </div>
            </div>}



    </div>)
}

export default CreateList;