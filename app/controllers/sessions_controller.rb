class SessionsController < ApplicationController
  def new
    if logged_in?
      redirect_to root_url
    end
    @user = User.new
  end

  def create
    @user = User.find_by_credentials(params[:user][:username],
    params[:user][:password])
    if @user
      login(@user)
      redirect_to root_url
    else
      @user = User.new
      render :new
    end
  end

  def destroy
    @user = current_user

    logout(current_user)
    redirect_to new_session_url
  end
end
