module Api
  class SongsController < ApiController
    def index
      @songs = Song.all
      render json: @songs
    end

    def show
      @song = Song.find(params[:id])
      render :show
    end

    def new
      @song = Song.new
    end

    def create
      @song = Song.new(user_params)

      if @song.save
        render json: @song
      else
        @song = Song.new
        render :new
      end
    end

    def update
      @song = Song.find(params[:id])
    end

    def destroy

    end

    private
    def user_params
      params.require(:song).permit(:title, :description, :user_id)
    end
  end
end
