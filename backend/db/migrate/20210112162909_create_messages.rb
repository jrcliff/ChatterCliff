class CreateMessages < ActiveRecord::Migration[6.0]
  def change
    create_table :messages do |t|
      t.string :content
      t.references :user
      t.references :chat_room

      t.timestamps
    end
  end
end
