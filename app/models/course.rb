class Course < ApplicationRecord
  belongs_to :user, class_name: "user", foreign_key: "user_id"

  validates :title, presence: true
  validates :content, presence: true

end
