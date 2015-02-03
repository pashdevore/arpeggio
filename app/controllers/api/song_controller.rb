class SongController < ApplicationController
  def index

  end

  def new

  end

  def update

  end

  def destroy

  end

  private
  def user_params
    params.require(:user).permit(:title, :description, :user_id)
  end
end
