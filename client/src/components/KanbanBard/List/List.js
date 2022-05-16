import React from "react";
import './List.css';
import ListName from "./ListName";
import AddNote from "./AddNote";

const List = (props) => {
    const { BIndex, LIndex } = props;
    return (
        <div className="lists">
            <ListName BIndex={BIndex} LIndex={LIndex} />
            <AddNote BIndex={BIndex} LIndex={LIndex} />
        </div>
    )
}

export default List;