import React from 'react';

const SubList = (props) => {
    return (
        <div>
            <button onCLick={(chat_room) => props.openRoomSubs(props.openRoom.id)}>
                Members
            </button>
        </div>
    );
}

export default SubList;
