import React, { useState, useEffect, useRef } from "react";
import { addList } from "../../../kanbanSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import './CreateList.css';
import { useSelector } from "react-redux";
const CreateList = (props) => {
    let index = useSelector(state => state.kanban.openedBoard.index);
    const dispatch = useDispatch();
    const [listName, setListName] = useState("");
    const [onCreate, setOnCreate] = useState(false);
    let handleCreate = () => {
        if (listName.length > 0) {
            dispatch(addList({ BIndex: index, name: listName })) // dispatch add list reducer
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