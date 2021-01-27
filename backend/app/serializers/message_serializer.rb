class MessageSerializer
    include FastJsonapi::ObjectSerializer
    attributes :id, :user_id, :chat_room_id, :content, :user, :chat_room
  end