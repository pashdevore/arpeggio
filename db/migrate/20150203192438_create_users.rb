class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false, unique: true
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :avatar_url
      t.string :first_name
      t.string :last_name
      t.string :city
      t.string :state
      t.string :country
      t.text   :biography
      t.string :website_url
      t.string :facebook_url
      t.string :twitter_url
      t.string :youtube_url
      t.string :instagram_url

      t.timestamps null: false
    end
  end
end
