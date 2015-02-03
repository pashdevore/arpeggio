class Tag < ActiveRecord::Base
  validates :label, presence: true

  has_many :taggings
end
