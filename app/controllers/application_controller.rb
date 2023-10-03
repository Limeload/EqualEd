class ApplicationController < ActionController::API
  include ActionController::Cookies

 before_action :authorize

 rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
 rescue_from ActiveRecord::RecordInvalid, with: :render_record_invalid

 def render_not_found(error)
    render json: {error: error.message }, status: :not_found
 end

 def render_record_invalid invalid
   render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
 end

 def current_user
  User.find_by(id: session[:user_id])
end

private

def authorize
  return render json: { error: ["Not Authorized"] }, status: :unauthorized unless session.include? :user_id
end


end
