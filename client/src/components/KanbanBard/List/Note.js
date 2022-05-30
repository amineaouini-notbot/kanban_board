import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './Note.css';
import { Draggable } from 'react-beautiful-dnd';

const Note = (props) => {
    const { NIndex, LIndex, BIndex } = props;
    // @ts-ignore
    const note = useSelector(state => state.kanban.boards[BIndex].lists[LIndex].content[NIndex]);

    return (
        <Draggable>
            {provider => (

                <div className='note_container' ref={provider.innerRef}>
                    <span className='note'>
                        {note}
                    </span>
                </div>
            )}
        </Draggable>
    )
}

export default Note;