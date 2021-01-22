import React, { useState, useEffect } from 'react'
import ChatRooms from './ChatRooms'
import Messages from './Messages'
import SearchRoom from './SearchRoom';


export default function Home(props) {

    const [openRoom, setOpenRoom] = useState(null);

    const handleOpenRoom = (room) => {
        if(room !== undefined){
            setOpenRoom(room)
        }
        // const [messages, setMessages] = useState({
        //     messages: room.messages
        // })

        console.log(room.messages)
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
            <Messages setOpenRoom={setOpenRoom} openRoom={openRoom} />
            {/* { messages.map(message => <Message message={message} key={message.id} />)} */}
            
            </div>

            
        </div>
    )
}
