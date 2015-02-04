class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    debugger
    @user = User.new(user_params)

    if @user.save
      login(@user)
      redirect_to root_url
    else
      @user = User.new
      render :new
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
