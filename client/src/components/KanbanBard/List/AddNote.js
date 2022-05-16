import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../../../kanbanSlice';
import './AddNote.css';

const AddNote = () => {
    const dispatch = useDispatch();
    const [onAdd, setOnAdd] = useState(false);
    let handelOnAdd = () => setOnAdd(!onAdd);

    return (
        <div className='add_note_container'>
            {!onAdd ? <div className='add_note' onClick={handelOnAdd}><div className='add_note_text'><span>+</span> Add a Note</div></div> : <div className='on_add_note'>on add</div>}
        </div>
    )
}

export default AddNote;