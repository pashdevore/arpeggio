class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.string :description, null: false
      t.string :image_url, null: false
      t.string :thumbnail_url, null: false
      t.string :audio_file_name
      t.string :audio_content_type
      t.integer :audio_file_size
      t.datetime :audio_updated_at

      t.timestamps null: false
    end
  end
end
