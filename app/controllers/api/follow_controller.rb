module Api
  class FollowController < ApiController
    def create
      @user = current_user
      @user.following << User.find(1)
      render :show
    end
  end
end
