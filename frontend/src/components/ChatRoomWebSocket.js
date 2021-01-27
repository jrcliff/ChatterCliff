// import React, { Component } from 'react'

// export default class ChatRoomWebSocket extends Component {
//     componentDidMount() {
//         this.props.getRoomData(window.location.href.match(/\d+$/))
//         this.props.cableApp.chatRoom = this.props.cableApp.cable.subscriptions.create({
//             channel: 'ChatRoomsChannel',
//             chat_room: window.location.href.match(/\d+$/)
//         },
//         {
//             received: (updatedRoom) => {
//                 this.props.updateApp(updatedRoom)
//             }
//         }
//         )
//     }
//     render() {
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }
