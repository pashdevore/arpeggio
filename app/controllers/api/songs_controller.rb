class Api::SongsController < ApplicationController
  def index
    @songs = Song.all
    render json: @songs
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
