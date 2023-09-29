class ApplicationController < ActionController::API
  include ActionController::Cookies

 before_action :authorize
 skip_before_action :verify_authenticity_token


 rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
 rescue_from ActiveRecord::RecordInvalid, with: :render_record_invalid

 def render_not_found(error)
    render json: {error: error.message }, status: :not_found
 end

 def render_record_invalid invalid
   render json: {errors: invalid.record.errors}, status: :unprocessable_entity
 end

private

def authorize
  @current_user ||= User.find_by(id: cookies.signed[:user_id]) if cookies.signed[:user_id]
  render json: { errors: ["Not authorized, please login"] }, status: :unauthorized unless @current_user
end


end
