import React from 'react';

const SubList = (props) => {
    return (
        <div>
            <button onCLick={() => props.openRoomSubs(props.openRoom)}>
                Members
            </button>
        </div>
    );
}

export default SubList;
