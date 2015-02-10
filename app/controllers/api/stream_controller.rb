module Api
  class StreamController < ApiController
    def index
      # @users = User.all;
      @stream_songs = current_user.stream_songs;
    end
  end
end
