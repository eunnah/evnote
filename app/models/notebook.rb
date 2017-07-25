class Notebook < ActiveRecord::Base

  validates :title, :author_id, presence: true

  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :User

  has_many :notes,
  primary_key: :id,
  foreign_key: :notebook_id,
  class_name: :Note

end
