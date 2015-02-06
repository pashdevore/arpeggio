# == Schema Information
#
# Table name: songs
#
#  id            :integer          not null, primary key
#  user_id       :integer          not null
#  title         :string           not null
#  description   :string           not null
#  image_url     :string           not null
#  thumbnail_url :string           not null
#  image_height  :integer          not null
#  image_width   :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Song < ActiveRecord::Base
  validates :title, :description, :image_url, :thumbnail_url, :user_id, presence: true

  belongs_to :user
  has_many :taggings
  has_many :song_likes
end
