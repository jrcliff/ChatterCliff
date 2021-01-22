import React, {useState} from 'react'
import NewMessage from './NewMessage'

export default function Messages(props) {
    console.log(props.openRoom?.messages)
    let messages = props.openRoom?.messages
    
    return (
        
        <div>
            {props.roomMessages?.map(message => 
            <div user={message.user}>
                <span key={message.id} user={message.user}>{message.content}</span>
                <h2>{message.user.username}</h2>
             </div>   
             )
            }
            { props.openRoom ?  <NewMessage className='new-message-bar' roomMessages={props.roomMessages} updateMessages={props.updateMessages} openRoom={props.openRoom} setOpenRoom={props.setOpenRoom}/> : <h2>Click on a room to Chat</h2> }
            
        </div>
    )
}
