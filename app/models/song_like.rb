class SongLike < ActiveRecord::Base
  validates :song_id, :user_id, presence: true

  belongs_to :song
  belongs_to :user
end
