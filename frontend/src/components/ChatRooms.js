import React, {useState, useEffect, useLocalStorage} from 'react'
import Room from './Room'
import axios from 'axios'
import NewRoom from './NewRoom'

export default function ChatRooms(props) {
    
    const [rooms, setRooms] = useState([])
   

    useEffect(async () => {
        
        const roomsData = await axios(`http://localhost:3000/chat_rooms`) 
        setRooms(roomsData.data)
        
    }, [])
    const handleDelete = (e) => {
       
        let updatedRooms = rooms.filter(room => room !== e)
        fetch(`http://localhost:3000/chat_rooms/${e.id}`, {method: 'DELETE'})
        setRooms(updatedRooms)
        
    }
    const updateNewRooms = (room) => {
        setRooms([...rooms, room])
    }





    
    return (
        
        
        <div>
        <NewRoom updateNewRooms={updateNewRooms} />
        {rooms?.map(room => <Room handleDelete={handleDelete}  handleOpenRoom={props.handleOpenRoom} key={room.id} room={room} />)}
        </div>
    )
}
