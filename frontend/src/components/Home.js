import React, { useState, useEffect } from 'react'
import ChatRooms from './ChatRooms'
import Messages from './Messages'
import SearchRoom from './SearchRoom';
import SubList from './SubList'


export default function Home(props) {
    const openRoomSubs = (chat_room) => {
        fetch('http://localhost:3000/sublist')
        .then(res => res.json())
        .then(sublist => console.log(sublist))
    }

    const [openRoom, setOpenRoom] = useState(localStorage.getItem('openRoom') || null);

    const handleOpenRoom = (room) => {
        if(room !== undefined){
            setOpenRoom(room)
            localStorage.setItem('openRoom', room)
            setRoomMessages(room.messages)
        }
        // const [messages, setMessages] = useState({
        //     messages: room.messages
        // })

        console.log(room.messages)
    }

    const [roomMessages, setRoomMessages] = useState(openRoom?.messages)
    // if (message.user === current_user)
    const updateMessages = (newMessage) => {
        setRoomMessages([...roomMessages, newMessage])
         console.log(roomMessages);
    }

    console.log(openRoom);


    return (
        <div id='chat-container'>
            <div id="side-bar">
            <div>
                
                <h2>
                    {props.currentUser?.username}
                </h2>
            </div>
            <SearchRoom rooms={props.rooms} />
            <ChatRooms handleOpenRoom={handleOpenRoom} />
            </div>
            <div id="chat-window">
            <Messages roomMessages={roomMessages} setOpenRoom={setOpenRoom} updateMessages={updateMessages} openRoom={openRoom} />
            <SubList openRoomSubs={openRoomSubs} />
            </div>

            
        </div>
    )
}
