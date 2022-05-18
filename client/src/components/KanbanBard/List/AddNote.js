import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../../../kanbanSlice';
import './AddNote.css';

const AddNote = () => {
    const dispatch = useDispatch();
    const [onAdd, setOnAdd] = useState(false);
    const [note, setNote] = useState('')
    let handelOnAdd = () => setOnAdd(!onAdd);

    return (
        <div className='add_note_container'>
            {!onAdd ? <div className='add_note' onClick={handelOnAdd}><div className='add_note_text'><span>+</span> Add a Note</div></div> :
                <div className='on_add_note'>
                    <div className='add_note_actions'>

                        <textarea onChange={e => setNote(e.target.value)}></textarea>
                        <span>Add</span><span onClick={handelOnAdd}>x</span>
                    </div>
                </div>}
        </div>
    )
}

export default AddNote;