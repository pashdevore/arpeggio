class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      redirect_to posts_url
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
