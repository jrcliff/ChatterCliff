import React, {useContext, useEffect, useState} from 'react'
import { ActionCableContext } from './Home'
import NewMessage from './NewMessage'
import Subscribe from './Subscribe'
import ChatRoomWebSocket from './ChatRoomWebSocket'
import { ActionCableConsumer } from 'react-actioncable-provider'



export default function Messages(props) {
    const cable = useContext(ActionCableContext)
    const [channel, setChannel] = useState(null)
    useEffect(() => {
        console.log(props.roomMessages);
    })
    const whichUser = (message) => {
        if (message.user_id === props.user.id) {
            return 'current-user-message'
        } else {
            return 'other-user-message'
        }
    }
    

    return (
        <ActionCableConsumer>
        <div>
             <Subscribe openRoom={props.openRoom} />  
            {props.roomMessages?.map(message =>
            
            <span className={whichUser(message)} user={message.user}>
                <div key={message.id} user={message.user}>{message.content}</div>
                <h4>{message.user?.username}</h4>
             </span> 
            
           
            )
            }
            {/* <ChatRoomWebSocket
                cableApp={props.cableApp}
                dateApp={props.updateApp}
                getRoomData={props.getRoomData}
            /> */}
            { props.openRoom ?  <NewMessage className='new-message-bar' roomMessages={props.roomMessages} updateMessages={props.updateMessages} openRoom={props.openRoom} user={props.user} setOpenRoom={props.setOpenRoom}/> : <h2>Click on a room to Chat</h2> }
            
        </div>
        </ActionCableConsumer>
    )
}
