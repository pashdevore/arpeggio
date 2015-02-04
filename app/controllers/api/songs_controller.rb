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

    end

    def update

    end

    def destroy

    end

    private
    def user_params
      params.require(:song).permit(:title, :description, :user_id)
    end
  end
end
