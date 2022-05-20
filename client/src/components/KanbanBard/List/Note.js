import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './Note.css';

const Note = (props) => {
    const { NIndex, LIndex, BIndex } = props;
    // @ts-ignore
    const note = useSelector(state => state.kanban.boards[BIndex].lists[LIndex].content[NIndex]);
    const [content, setContent] = useState(note);

    return (
        <div className='note_container'>
            <span className='note'>
                {content}
            </span>
        </div>
    )
}

export default Note;