module Api
  class StreamController < ApiController
    def index
      @stream_songs = current_user.stream_songs;
      render :index
    end
  end
end
