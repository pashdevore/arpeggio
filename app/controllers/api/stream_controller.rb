module Api
  class StreamController < ApiController
    def index
      @user = current_user;
      render :index
    end
  end
end
