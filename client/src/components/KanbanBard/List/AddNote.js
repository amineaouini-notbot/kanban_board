import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../../../kanbanSlice';
import './AddNote.css';

const AddNote = (props) => {
    const dispatch = useDispatch();
    const [onAdd, setOnAdd] = useState(false);
    const [note, setNote] = useState('')
    const { BIndex, LIndex } = props;
    const close = () => setOnAdd(false);

    let handleOnAdd = () => {
        if (note.length > 0) {
            dispatch(addNote({ BIndex, LIndex, content: note }));
            close();
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