class Song < ActiveRecord::Base
  validates :title, :description, :user_id, presence: true

  belongs_to :user
  has_many :taggings
end
