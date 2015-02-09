module Api
  class FollowingController < ApiController
    before_action :get_user

    def create
      @user.followers << current_user
      render :show
    end

    def destroy
      @user.followers.delete(current_user)
      render :show
    end

    private
    def get_user
      @user = User.includes(:followers).find(params[:user_id])
    end
  end
end
