import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import CreateList from "./CreateList/CreateList";
import List from "./List/List";
import './KanbanBoard.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import ListName from "./List/ListName";
import Note from "./List/Note";
import AddNote from "./List/AddNote";
const KanbanBoard = () => {
    let { id } = useParams();

    let board = useSelector(state => state.kanban.boards[id]);
    let { name, lists } = board;
    const handleOnDrag = result => {
        console.log(result)
        if (!result.destination) return
    }
    console.log(lists)


    return (
        <div>
            <div id="board_title">
                <h2>{name}</h2>
            </div>
            <div id="content">
                <DragDropContext onDragEnd={handleOnDrag}>
                    <Droppable droppableId="droppable_lists" direction="horizantal">
                        {(provided, snapshotDrop) => {
                            return (
                                <div id="lists" {...provided.droppableProps} ref={provided.innerRef}>
                                    {lists.map((list, LIndex) => <List LIndex={LIndex} BIndex={id} />)}

                                    {provided.placeholder}
                                </div>
                            )
                        }}
                    </Droppable>
                    <CreateList />
                </DragDropContext>
            </div>
        </div >
    )
}

export default KanbanBoard;