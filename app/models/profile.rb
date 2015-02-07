# == Schema Information
#
# Table name: profiles
#
#  id           :integer          not null, primary key
#  first_name   :string           not null
#  last_name    :string           not null
#  gravatar_url :string
#  city         :string
#  state        :string
#  country      :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Profile < ActiveRecord::Base
  validates :first_name, :last_name, :user_id, presence: true

  belongs_to :user
end
