class Tagging < ActiveRecord::Base

  validates :tag_id, :note_id, presence: true

  belongs_to :tag,
  primary_key: :id,
  foreign_key: :tag_id,
  class_name: :Tag

  belongs_to :note,
  primary_key: :id,
  foreign_key: :note_id,
  class_name: :Note

end
