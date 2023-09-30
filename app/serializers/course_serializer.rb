class CourseSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :enrollments
end
