import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../../../kanbanSlice';
import './AddNote.css';

const AddNote = (props) => {
    const dispatch = useDispatch();
    const [onAdd, setOnAdd] = useState(false);
    const [note, setNote] = useState('')
    const { BIndex, LIndex } = props;
    let handleOnAdd = () => {
        dispatch(addNote({ BIndex, LIndex, note }));
        setOnAdd(false)
    };

    return (
        <div className='add_note_container'>
            {!onAdd ? <div className='add_note' onClick={() => setOnAdd(true)}><div className='add_note_text'><span>+</span> Add a Note</div></div> :
                <div className='on_add_note'>
                    <textarea onChange={e => setNote(e.target.value)}></textarea>
                    <div className='add_note_actions'>

                        <button onClick={handleOnAdd}>Add note</button>
                        <span onClick={() => setOnAdd(false)}>x</span>
                    </div>
                </div>}
        </div>
    )
}

export default AddNote;