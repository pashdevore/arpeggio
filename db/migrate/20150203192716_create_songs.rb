class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.string :description, null: false
      t.string :image_url, null: false
      t.string :thumbnail_url, null: false
      t.integer :image_height, null: false
      t.integer :image_width, null: false

      t.timestamps null: false
    end
  end
end
