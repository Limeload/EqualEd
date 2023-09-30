class CourseSerializer < ActiveModel::Serializer
  attributes :id, :title, :content

  has_many :users
end
