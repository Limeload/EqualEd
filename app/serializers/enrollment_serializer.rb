class EnrollmentSerializer < ActiveModel::Serializer
  attributes :id, :course_id, :user_id, :enrolled, :created
end
