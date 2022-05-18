import React from "react";
import './List.css';
import ListName from "./ListName";
import AddNote from "./AddNote";
import { useSelector } from "react-redux";
import Note from "./Note";

const List = (props) => {
    const { BIndex, LIndex } = props;
    // @ts-ignore
    const list = useSelector(state => state.kanban.boards[BIndex].lists[LIndex].content);
    return (
        <div className="lists">
            <ListName BIndex={BIndex} LIndex={LIndex} />
            {list.map((note, NIndex) => <Note key={NIndex} BIndex={BIndex} LIndex={LIndex} NIndex={NIndex} />)}
            <AddNote BIndex={BIndex} LIndex={LIndex} />
        </div>
    )
}

export default List;