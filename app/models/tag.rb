class Tag < ActiveRecord::Base

  validates :name, presence: true

  has_many :taggings,
  primary_key: :id,
  foreign_key: :tag_id,
  class_name: :Tagging

  has_many :notes,
  through: :taggings,
  source: :note

end
