require 'byebug'
module Api
  class FollowController < ApiController
    def create
      @user = current_user
      @user.following << User.find(@_params['follower_id'])
      render json: @user
    end

    # def update
    #   @user = current_user
    #   @user.following.delete(User.find(@_params['id']))
    #   render :show
    # end

    def destroy
      @user = current_user
      @user.following.delete(User.find(@_params['id']))
      render :show
    end
  end
end
