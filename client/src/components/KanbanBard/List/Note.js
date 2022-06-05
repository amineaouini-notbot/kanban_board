import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './Note.css';
import { Draggable } from 'react-beautiful-dnd';

const Note = (props) => {
    const { NIndex, LIndex, BIndex } = props;
    const [onEdit, setOnEdit] = useState(false);
    // @ts-ignore
    const note = useSelector(state => state.kanban.boards[BIndex].lists[LIndex].content[NIndex]);

    return (
        <Draggable draggableId={'note_' + NIndex + '_of_' + LIndex} index={NIndex} key={NIndex}>
            {
                provider => (

                    <div {...provider.dragHandleProps} {...provider.draggableProps} className='note_container' ref={provider.innerRef} >
                        <span className='note'>
                            {note}
                        </span>
                    </div>
                )
            }
        </Draggable >
    )
}

export default Note;