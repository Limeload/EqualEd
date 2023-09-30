class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :instructor

  has_many :courses
end
