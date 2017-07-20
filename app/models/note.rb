class Note < ActiveRecord::Base

  validates :title, :author_id, :notebook_id, presence: true

  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :User

  belongs_to :notebook,
  primary_key: :id,
  foreign_key: :notebook_id,
  class_name: :Notebook

  has_many :taggings,
  primary_key: :id,
  foreign_key: :note_id,
  class_name: :Tagging

  has_many :tags,
  through: :taggings,
  source: :tag

end
