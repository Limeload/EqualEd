class CoursesController < ApplicationController
  skip_before_action :authorize, only: [:index, :show]

  def index
    courses = Course.all
    render json: courses, status: :ok
  end

  def show
    course = Course.find(params[:id])
    render json: course, status: :ok
  end

  def create
    if !current_user.instructor
     render json: { error: ["You are not authorized to perform this action."] }, status: :unauthorized
    else
      course = Course.new(course_params)
      if course.save
        render json: course, status: :created
      else
        render json: { error: course.errors.full_messages }, status: :unprocessable_entity
      end
    end
  end
  # TODO: update and destroy should also check if the user has an enrollment with the course where created: true
  def update
    if !current_user.instructor
      render json: { error: ["You are not authorized to perform this action."] }, status: :unauthorized
     else
      course = Course.find(params[:id])
      course.update!(course_params)
      render json: course, status: :ok
     end
  end

  def destroy
    if !current_user.instructor
      render json: { error: ["You are not authorized to perform this action."] }, status: :unauthorized
     else
      course = Course.find(params[:id])
      course.destroy
      head :no_content
     end
  end

  private

  def course_params
    params.permit(:title, :content)
  end
end
