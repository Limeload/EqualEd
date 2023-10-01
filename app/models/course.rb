class Course < ApplicationRecord
  has_many :enrollments
  has_many :users, through: :enrollments

  validates :title, presence: true
  validates :content, presence: true

end
