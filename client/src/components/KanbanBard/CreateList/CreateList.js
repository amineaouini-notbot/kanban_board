import React, { useState, useEffect, useRef } from "react";
import { addList } from "../../../kanbanSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import './CreateList.css';

const CreateList = (props) => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [listName, setListName] = useState("");
    const [onCreate, setOnCreate] = useState(false);
    let handleCreate = () => {
        if (listName.length > 0) {
            dispatch(addList({ BIndex: id, name: listName }))
            setOnCreate(false)
        }
    }
    let addListRef = useRef(null);
    useEffect(() => {
        let handler = event => {
            if (!addListRef.current.contains(event.target)) {
                setOnCreate(false)
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