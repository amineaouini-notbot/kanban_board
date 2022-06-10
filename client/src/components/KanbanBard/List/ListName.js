import React from "react";
import { useSelector } from "react-redux";
import './ListName.css';

const ListName = (props) => {
    const name = useSelector(state => state.kanban.boards[props.BIndex].lists[props.LIndex].name)
    // added props handle drag to list name to drag list only from list title 
    // and to not make dnd bugs between list and note
    return (
        <div {...props.handleDrag} className="lists_names">
            <span>{name}</span>
        </div>
    )
}

export default ListName;