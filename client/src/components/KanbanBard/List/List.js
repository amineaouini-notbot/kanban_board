import React from "react";
import './List.css';
import ListName from "./ListName";
import AddNote from "./AddNote";
import { useSelector } from "react-redux";
import Note from "./Note";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
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
    const handleNoteDrag = result => {
        console.log(result)
        if (!result.destination) return
    }
    return (
        <Draggable key={LIndex} draggableId={LIndex.toString()} index={LIndex} isDragDisabled={true}>
            {(provided, snapshot) => {

                return (


                    <div className="lists" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} style={getListStyle(snapshot.isDragging, provided.draggableProps.style)}>
                        <ListName BIndex={BIndex} LIndex={LIndex} />

                        {/* <DragDropContext onDragEnd={handleNoteDrag}> */}
                        <div >
                            <Droppable droppableId={'list_' + LIndex} type='NOTE'>
                                {(provided, snapshot) => {
                                    return (
                                        <div ref={provided.innerRef} {...provided.droppableProps}>

                                            {list.map((note, NIndex) => <Note key={NIndex} BIndex={BIndex} LIndex={LIndex} NIndex={NIndex} />)}
                                            {provided.placeholder}
                                        </div>
                                    )

                                }}

                            </Droppable>
                        </div>
                        {/* </DragDropContext> */}
                        <AddNote BIndex={BIndex} LIndex={LIndex} />

                    </div>

                )
            }}
        </Draggable>

    )
}

export default List;