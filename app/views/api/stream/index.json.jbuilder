json.array! @stream_songs do |song|
  json.extract! song, :id, :user_id, :title, :description, :image_url, :thumbnail_url, :audio_file_name, :created_at, :updated_at
  json.extract! song.user, :first_name, :last_name
end
