class User < ApplicationRecord
    has_many :subs
    has_many :chat_rooms, through: :subs
    has_many :messages, through: :chat_rooms
    validates :chat_rooms, uniqueness: true
end
