class ChatRoomSerializer
    include FastJsonapi::ObjectSerializer
    attributes :id, :title, :messages, :user, :users, :user_id
    attribute :users do |room|
      UserSerializer.new(room.users.uniq)
    end
  end
  