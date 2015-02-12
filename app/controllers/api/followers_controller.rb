require 'byebug'
module Api
  class FollowersController < ApiController
    def destroy
      render json: current_user
    end
  end
end
