class Following < ActiveRecord::Base
  validates :user_id, :follower_id, presence: true

  belongs_to :user
  has_one :follower
end
