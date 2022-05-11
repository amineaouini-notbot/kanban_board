import React, { useState, useEffect, useRef } from "react";
import { addList } from "../../kanbanSlice";
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
    return !onCreate ? (<div id="add_list" onClick={() => setOnCreate(true)}><span>+ Add a list</span></div>) :
        <div id="on_add_list" ref={addListRef}>
            <input onChange={(e) => setListName(e.target.value)}></input>
            <button onClick={handleCreate}>Add list</button>
        </div>
}

export default CreateList;