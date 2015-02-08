module Api
  class FollowingController < ApiController
    def create
      @following = Following.new(following_params)

      if @following.save
        
      else

      end
    end

    def destroy

    end
  end
end
