class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :instructor

  has_many :courses
  has_many :enrollments

  def username
    object.username.capitalize
  end
end
