module Api
  class SongsController < ApiController
    def index
      @songs = Song.all
      render json: @songs
    end

    def show
      @song = Song.find(params[:id])
      render json: @song
    end

    def new
      @song = Song.new
      render json: @song
    end

    def create
      @song = Song.new(song_params)

      if @song.save
        render json: @song
      else
        @song = Song.new
        render json: @song
      end
    end

    def update
      @song = Song.find(params[:id])
    end

    def destroy

    end

    private
    def song_params
      params.require(:song).permit(:title, :description, :user_id, :audio_file_name, :image_url, :thumbnail_url, :image_width, :image_height)
    end
  end
end
