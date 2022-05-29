import React from "react";
import './List.css';
import ListName from "./ListName";
import AddNote from "./AddNote";
import { useSelector } from "react-redux";
import Note from "./Note";
import { Draggable } from "react-beautiful-dnd";
const List = (props) => {
    const { BIndex, LIndex } = props;
    const list = useSelector(state => state.kanban.boards[BIndex].lists[LIndex].content);
    const getListStyle = (isDragging, draggableStyle) => {
        return { // change curser on drag
            cursor: isDragging ? "move" : "pointer",
            ...draggableStyle,
            ...(isDragging && { pointerEvents: 'auto' }) // opt out pointer-events on dragging
        }
    }
    return (
        <Draggable key={LIndex} draggableId={LIndex.toString()} index={LIndex} >
            {(provided, snapshot) => {

                return (


                    <div className="lists" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} style={getListStyle(snapshot.isDragging, provided.draggableProps.style)}>
                        <ListName BIndex={BIndex} LIndex={LIndex} />
                        {list.map((note, NIndex) => <Note key={NIndex} BIndex={BIndex} LIndex={LIndex} NIndex={NIndex} />)}
                        <AddNote BIndex={BIndex} LIndex={LIndex} />

                    </div>

                )
            }}
        </Draggable>

    )
}

export default List;