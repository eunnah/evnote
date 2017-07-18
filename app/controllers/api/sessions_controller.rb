class Api::SessionsController < ApplicationController

  before_action :require_logged_in, except: [:create]

  def create
    @user = User.find_by_credentials(
    params[:user][:username],
    params[:user][:password])

    if @user.save
      login!(@user)
      render "api/users/show"
    else
      render json: ["invalid credentials"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout!
      render "api/users/show"
    else
      render json: ["Not signed in"], status: 404
    end
  end

end
