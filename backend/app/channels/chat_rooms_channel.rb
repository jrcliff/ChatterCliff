class ChatRoomsChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    @chat_room = ChatRoom.find_by(id: params[:chat_room])
    stream_for @chat_room
  end

  def received(data) 
    ChatRoomsChannel.broadcast_to(@chat_room, {chat_room: @chat_room, subs: @chat_room.subs, messages: @chat_room.messages})
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
