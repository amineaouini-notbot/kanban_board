import React from 'react';
import { useSelector } from 'react-redux';
import './Note.css';

const Note = (props) => {
    const { NIndex, LIndex, BIndex } = props;
    // @ts-ignore
    const note = useSelector(state => state.kanban.boards[BIndex].lists[LIndex].content[NIndex]);
    return (
        <div className='note'>
            {note}
        </div>
    )
}

export default Note;