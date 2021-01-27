import React from 'react';

const SubList = (props) => {
    return (
        <div>
            <button onClick={(chat_room) => props.openRoomSubs(props.openRoom.id)}>
                Members
            </button>
        </div>
    );
}

export default SubList;
