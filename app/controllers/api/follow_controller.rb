require 'byebug'
module Api
  class FollowController < ApiController
    def create
      @user = current_user
      @user.following << User.find(@_params['follower_id'])
      render :show
    end

    def destroy
      debugger
      @user = current_user
      @user.following.delete(User.find(@_params['id']))
      render :show
    end
  end
end
