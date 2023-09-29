class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create, :me, :show, :index, :destroy]

  def index
    users = User.all
    render json: users, status: :ok
  end

  def me
    @current_user = User.find_by(id: params[:id])
    render json: @current_user, status: :ok
  end

  def show
    @current_user = User.find_by(id: params[:id])
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
    params.permit(:user_name, :email, :password, :password_confirmation)
  end

end
