import React, { createContext, useState, useEffect } from 'react'
import ChatRooms from './ChatRooms'
import Messages from './Messages'
// import SearchRoom from './SearchRoom';
import SubList from './SubList'
import actionCable from 'actioncable'
import { ActionCable } from 'react-actioncable-provider';
import { API_ROOT } from '../constants';


const CableApp = {}
CableApp.cable = actionCable.createConsumer('ws://localhost:3000/cable')
export const ActionCableContext = createContext()


export default function Home(props) {
    
    const openRoomSubs = (chat_room) => {
        fetch('http://localhost:3000/sublist')
        .then(res => res.json())
        .then(sublist => console.log(sublist))
    }

    const [openRoom, setOpenRoom] = useState();
    
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
    const [cable, setCable] = useState()
    const [roomMessages, setRoomMessages] = useState(openRoom?.messages)
    useEffect(() => {
        let connection
      const cable = actionCable.createConsumer('ws://localhost:3000/cable') 
      connection = cable.subscriptions.create(
          { channel: 'ChatRoomsChannel', chat_room_id: openRoom?.id},
          {
              connected: () => 
              console.log('connected'),
              received: (data) => {
                  updateMessages(data);
                //   updateAppStateRoom(data)
                  console.log(data)
              }
          }
      )
    }, [openRoom])
    // if (message.user === current_user)
    const updateMessages = (newMessage) => {
        setRoomMessages([...roomMessages, newMessage])
         console.log(roomMessages);
    }

    console.log(openRoom);
    const [currentRoom, setCurrentRoom] = useState({})
    const getRoomData = (id) => {
        fetch(`http://localhost:3000/chat_rooms/${openRoom}`)
        .then(res => res.json())
        .then(room => setCurrentRoom({
            
                room: room,
                subs: room.subs,
                messages: room.messages
            
        }))
    }

     const updateAppStateRoom = (newRoom) => {
        setCurrentRoom({
           
                room: newRoom,
                subs: newRoom.subs,
                messages: newRoom.messages
            
        })
    }
    return (
        <div id='chat-container'>
            <div id="side-bar">
            <div>
                
                <h2>
                    {props.user.username}
                </h2>
            </div>
            {/* <SearchRoom rooms={props.rooms} /> */}
            <ChatRooms handleOpenRoom={handleOpenRoom} />
            </div>
            <div id="chat-window">
            <Messages 
                user={props.user} 
                updateApp={updateAppStateRoom}
                getRoomData={getRoomData}
                roomData={currentRoom}
                cableApp={CableApp} 
                roomMessages={roomMessages} 
                setOpenRoom={setOpenRoom} 
                updateMessages={updateMessages}  
                openRoom={openRoom} 
            />
            {/* <SubList openRoomSubs={openRoomSubs} /> */}
            </div>

            
        </div>
    )
}
