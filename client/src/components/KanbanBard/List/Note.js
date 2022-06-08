import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './Note.css';
import { Draggable } from 'react-beautiful-dnd';
import { FiEdit2 } from "react-icons/fi";
import { updateNote } from '../../../kanbanSlice';
const Note = (props) => {
    const { NIndex, LIndex, BIndex } = props;
    const [onEdit, setOnEdit] = useState(false);
    const note = useSelector(state => state.kanban.boards[BIndex].lists[LIndex].content[NIndex]);
    const [newContent, setNewContent] = useState(note)
    if (note !== newContent) setNewContent(note) // fixes textarea value bug
    const changeContent = (e) => setNewContent(e.target.value);
    // @ts-ignore
    return (
        <Draggable draggableId={'note_' + NIndex + '_of_' + LIndex} index={NIndex} key={NIndex} isDragDisabled={onEdit}>
            {
                provider => (

                    <div {...provider.dragHandleProps} {...provider.draggableProps} ref={provider.innerRef} >

                        <div className='note_container'>

                            <span className='note' >
                                {note}
                            </span>
                            <FiEdit2 onClick={() => setOnEdit(!onEdit)}></FiEdit2>

                        </div>
                        {onEdit ?
                            <div className='on_edit_container'>
                                <div className='on_edit_note_content'>
                                    <textarea className='edit_textarea' onChange={changeContent} value={newContent}></textarea>
                                    <div className='on_edit_note_actions'>
                                        <button>Save</button>
                                        <span onClick={() => setOnEdit(false)}>X</span>
                                    </div>
                                </div>
                            </div> : <div className='dont_display'></div>}

                    </div>
                )
            }
        </Draggable >
    )
}

export default Note;