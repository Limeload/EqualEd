class EnrollmentsController < ApplicationController
    skip_before_action :authorize
    def create
        enrollment = Enrollment.create(enrollment_params)
        if enrollment.valid?
            #changed to return the enrolled course to push into the user's collection in state
            course = Course.find_by(id: enrollment.course_id)
            render json: course, status: :created
        else
            render json: { error: enrollment.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        user = User.find_by(id: session[:user_id])
        enrollment = user.enrollments.find_by(course_id: params[:id])
        if enrollment.destroy
            head :no_content
        else
            render json: { error: enrollment.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private
    
    def enrollment_params
        params.permit(:user_id, :course_id, :enrolled, :created)
    end
end
