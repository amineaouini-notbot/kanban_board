import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../../../kanbanSlice';
import './AddNote.css';

const AddNote = (props) => {
    const dispatch = useDispatch();
    const [onAdd, setOnAdd] = useState(false);
    const [content, setNote] = useState('')
    const { BIndex, LIndex } = props;
    const close = () => setOnAdd(false);

    let handleOnAdd = () => { // add note button clicked save new note to it's list
        if (content.length > 0) {
            dispatch(addNote({ BIndex, LIndex, content }));  // dispatch add note reducer
            close(); // returns comp to add_note div
        }
    };

    return (
        <div className='add_note_container'>
            {!onAdd ? <div className='add_note' onClick={() => setOnAdd(true)}><div className='add_note_text'><span>+</span> Add a Note</div></div> :
                <div className='on_add_note'>
                    <textarea onChange={e => setNote(e.target.value)}></textarea>
                    <div className='add_note_actions'>

                        <button onClick={handleOnAdd}>Add note</button>
                        <span onClick={close}>x</span>
                    </div>
                </div>}
        </div>
    )
}

export default AddNote;