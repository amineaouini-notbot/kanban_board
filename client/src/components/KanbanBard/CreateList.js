import React, { useState, useEffect, useRef } from "react";
import { addList } from "../../kanbanSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
const CreateList = (props) => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [listName, setListName] = useState("");
    const [onCreate, setOnCreate] = useState(false);
    let handleClick = () => {
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
    return !onCreate ? (<div onClick={() => setOnCreate(true)}>Add List +</div>) :
        <div>
            <input onChange={(e) => setListName(e.target.value)}></input>
            <button onClick={handleClick}>Add +</button>
        </div>
}

export default CreateList;