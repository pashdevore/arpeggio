class Tagging < ActiveRecord::Base
  validates :song_id, :tag_id, presence: true

  belongs_to :song
  belongs_to :tag
end
