class CreateSongLikes < ActiveRecord::Migration
  def change
    create_table :song_likes do |t|
      t.integer :song_id, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end
  end
end
