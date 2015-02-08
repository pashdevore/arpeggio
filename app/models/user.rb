# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  profile_id      :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  attr_reader :password

  validates :username, :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :songs

  has_many(
  :user_following,
  class_name: "UserFollow",
  foreign_key: :follower_id,
  primary_key: :id,
  )

  has_many(
  :user_followers,
  class_name: "UserFollow",
  foreign_key: :following_id,
  primary_key: :id,
  )

  has_many :following, through: :user_following, source: :following
  has_many :followers, through: :user_followers, source: :follower
  has_many :stream_songs, through: :following, source: :songs

  after_initialize :ensure_session_token

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end
end
