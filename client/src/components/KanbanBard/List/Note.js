import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './Note.css';
import { Draggable } from 'react-beautiful-dnd';
import { FiEdit2 } from "react-icons/fi";
const Note = (props) => {
    const { NIndex, LIndex, BIndex } = props;
    const [onEdit, setOnEdit] = useState(false);
    const note = useSelector(state => state.kanban.boards[BIndex].lists[LIndex].content[NIndex]);
    const [value, setValue] = useState('')
    const changeValue = (e) => setValue(e.target.value);
    // @ts-ignore
    return (
        <Draggable draggableId={'note_' + NIndex + '_of_' + LIndex} index={NIndex} key={NIndex} isDragDisabled={onEdit}>
            {
                provider => (

                    <div {...provider.dragHandleProps} {...provider.draggableProps} ref={provider.innerRef} >
                        {
                            !onEdit ?
                                <div className='note_container'>

                                    <span className='note' >
                                        {note}
                                    </span>
                                    <FiEdit2 onClick={() => setOnEdit(!onEdit)}></FiEdit2>

                                </div> :
                                <div className='on_edit_container'>
                                    <div className='on_edit_note_content'>
                                        <textarea onChange={changeValue} value={note}></textarea>
                                        <span onClick={() => setOnEdit(false)}>X</span>
                                    </div>
                                </div>
                        }


                    </div>
                )
            }
        </Draggable >
    )
}

export default Note;