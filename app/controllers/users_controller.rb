class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create, :show, :index, :destroy]

  def index
    users = User.all
    render json: users, status: :ok
  end

  def show
    @current_user = User.find_by(id: session[:user_id])
    render json: @current_user, status: :ok
  end


  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    cookies.signed[:user_id] = user.id
    render json: user, status: :created
  end

  def destroy
    user = User.find_by(id: params[:id])
    user.destroy
  end

  private

  def user_params
    params.permit(:username, :email, :password, :password_confirmation, :instructor)
  end

end
