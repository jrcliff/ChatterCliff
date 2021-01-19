import React, {useState, useEffect, useLocalStorage} from 'react'
import Room from './Room'
import axios from 'axios'
export default function ChatRooms(props) {
    const [rooms, setRooms] = useState([])
    const [openRoom, setOpenRoom] = useState(null);

    useEffect(async () => {
        
        const roomsData = await axios(`http://localhost:3000/chat_rooms`) 
        setRooms(roomsData.data)
        
    }, [])
    


    
    return (
        <div>
        {rooms?.map(room => <Room key={room.id} room={room} />)}
         
        </div>
    )
}
