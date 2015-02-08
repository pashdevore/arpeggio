module Api
  class StreamsController < ApiController
    def index
      @user = current_user;
      render :show
    end
  end
end
