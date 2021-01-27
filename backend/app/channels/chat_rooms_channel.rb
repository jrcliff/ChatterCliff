class ChatRoomsChannel < ApplicationCable::Channel
  def subscribed
    # byebug
    # stream_from "some_channel"
    if params[:chat_room_id].present?
    @chat_room = ChatRoom.find(params[:chat_room_id])
    
    stream_for @chat_room
    end
  end
  
  def speak(data)
    user = User.find_by(id: params[:user_id])
    chat_room   = @chat_room
    message   = data['message']

    Message.create!(
      chat_room: chat_room ,
      user: user,
      content: message
    )
  end

  # def received(data) 
    
  #   ChatRoomsChannel.broadcast_to(@chat_room, {chat_room: @chat_room, subs: @chat_room.subs, messages: @chat_room.messages})
  # end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
