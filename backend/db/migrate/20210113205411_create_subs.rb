class CreateSubs < ActiveRecord::Migration[6.0]
  def change
    create_table :subs do |t|
      t.references :chat_room
      t.references :user

      t.timestamps
    end
  end
end
