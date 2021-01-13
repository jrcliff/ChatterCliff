class ChatRoom < ApplicationRecord
    has_many :subs
    has_many :users, through: :subs
    has_many :messages, dependent: :destroy
    belongs_to :user
    validates :title, presence: true

end
