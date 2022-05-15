import React from "react";
import './List.css';
import ListName from "./ListName";
const List = (props) => {
    const { BIndex, LIndex } = props;
    return (
        <div className="lists">
            <ListName BIndex={BIndex} LIndex={LIndex} />
        </div>
    )
}

export default List;