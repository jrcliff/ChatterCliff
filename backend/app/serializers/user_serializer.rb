class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :chat_rooms, :messages, :username
  # attribute :avatar_url do |user| 
    # Rails.application.routes.url_helpers.rails_blob_path(user.avatar) if user.avatar.attached?
  # end
  # attribute :chat_rooms do |user|
  #   user.chat_rooms.uniq
  # end
end