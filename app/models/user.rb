class User < ApplicationRecord
  has_secure_password
  has_many :courses, class_name: "course", foreign_key: "reference_id"

  validates :email, presence: true, uniqueness: true
  validates :username, presence: true, uniqueness: true
  validates :password, presence: true, length: { minimum: 8 }, on: :create
  validates :password, confirmation: true
  validates :user_type, presence: true, inclusion: { in: %w(Student Educator) }

end
