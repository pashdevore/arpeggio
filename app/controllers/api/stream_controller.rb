module Api
  class StreamController < ApiController
    def index
      @stream_songs = current_user.stream_songs;
    end
  end
end
