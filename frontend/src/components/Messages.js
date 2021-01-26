import React, {useState} from 'react'
import NewMessage from './NewMessage'
import Subscribe from './Subscribe'



export default function Messages(props) {
    
    return (
        
        <div>
             <Subscribe openRoom={props.openRoom} />  
            {props.roomMessages?.map(message => 
            <div user={message.user}>
                <span key={message.id} user={message.user}>{message.content}</span>
                <h2>{message.user.username}</h2>
             </div> 
             )
            }
            { props.openRoom ?  <NewMessage className='new-message-bar' roomMessages={props.roomMessages} updateMessages={props.updateMessages} openRoom={props.openRoom} user={props.user} setOpenRoom={props.setOpenRoom}/> : <h2>Click on a room to Chat</h2> }
            
        </div>
    )
}
