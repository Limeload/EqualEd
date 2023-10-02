class User < ApplicationRecord
  has_secure_password
  has_many :enrollments
  has_many :courses, through: :enrollments
  before_validation :format_username

  validates :email, presence: true, uniqueness: true
  validates :username, presence: true, uniqueness: true
  validates :password, presence: true, length: { minimum: 8 }, on: :create

  def format_username
    self.username = self.username.downcase
  end

end
