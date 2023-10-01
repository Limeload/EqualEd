class EnrollmentsController < ApplicationController
    skip_before_action :authorize
    def create
        enrollment = Enrollment.create(enrollment_params)
        if enrollment.valid?
            render json: enrollment, status: :created
        else
            render json: { errors: enrollment.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        user = User.find_by(id: session[:user_id])
        enrollment = user.enrollments.find_by(id: params[:id])
        if enrollment.destroy
            render json: enrollment
        else
            render json: { errors: enrollment.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private
    
    def enrollment_params
        params.permit(:user_id, :course_id, :enrolled)
    end
end
