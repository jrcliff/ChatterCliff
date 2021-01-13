class CreateChatRooms < ActiveRecord::Migration[6.0]
  def change
    create_table :chat_rooms do |t|
      t.string :title
      t.references :user
     

      t.timestamps
    end
  end
end
