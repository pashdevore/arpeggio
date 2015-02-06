class UsersController < ApplicationController
  def new
    # @s3_direct_post = S3_BUCKET.presigned_post(key: "uploads/#{SecureRandom.uuid}/${filename}", success_action_status: 201, acl: :public_read)

    if logged_in?
      redirect_to root_url
    end

    @user = User.new
  end

  def create
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
