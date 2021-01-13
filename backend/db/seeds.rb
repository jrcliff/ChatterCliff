User.destroy_all
Message.destroy_all
ChatRoom.destroy_all

justin = User.create(username: 'jrcliff')
bob = User.create(username:'burgerbob')

thegang = ChatRoom.create(title: 'The Gang', user: justin)

message1 = Message.create(content: 'First message whats up gang', user: justin, chat_room: thegang)

firstsub = Sub.create(chat_room: thegang, user: justin)
secondsub = Sub.create(chat_room: thegang, user: bob)