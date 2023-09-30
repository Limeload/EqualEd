class Enrollment < ApplicationRecord
    belongs_to :user
    belongs_to :course

    validates :enrolled, presence: true
    validates :user_id, presence: true
    validates :course_id, presence: true
end
