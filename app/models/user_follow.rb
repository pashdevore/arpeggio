# == Schema Information
#
# Table name: user_follows
#
#  id           :integer          not null, primary key
#  follower_id  :integer          not null
#  following_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class UserFollow < ActiveRecord::Base
  validates :follower_id, :following_id, presence: true

  belongs_to(
  :follower,
  class_name: "User",
  foreign_key: :follower_id,
  primary_key: :id,
  )

  belongs_to(
  :following,
  class_name: "User",
  foreign_key: :following_id,
  primary_key: :id,
  )

end
