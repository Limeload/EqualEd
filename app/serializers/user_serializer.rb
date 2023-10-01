class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :instructor, :courses

  def username
    object.username.capitalize
  end

  def courses
    enrolled_true = object.enrollments.filter{ |e| e.enrolled }
    enrolled = enrolled_true.map{ |e| Course.find_by(id: e.course_id) }
    created = []
    if object.instructor
      created_true = object.enrollments.filter{ |e| e.created  }
      created = created_true.map{ |e| Course.find_by(id: e.course_id) }
    end
    {enrolled: enrolled, created: created}
  end

end
