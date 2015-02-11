require 'byebug'
module Api
  class FollowController < ApiController
    def create
      @user = current_user
      debugger
      @user.following << User.find(@_params['follower_id'])
      render :show
    end
  end
end
