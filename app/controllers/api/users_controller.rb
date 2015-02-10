module Api
  class UsersController < ApiController
    def index
      @users = User.all
      render json: @users
    end

    def show
      puts "in user api controller"
      @user = User.find(params[:id])
      @songs = @user.songs
      @followers = @user.followers
      @following = @user.following
      render :show
    end

    def update
      @user = User.find(params[:id])

      if @user.update_attributes(user_params)
        render :show
      else
        redirect_to root_url
      end
    end

    private
    def user_params
      params.require(:user).permit(:username, :password,
                                   :avatar_url,
                                   :first_name, :last_name,
                                   :city, :state, :country,
                                   :biography,
                                   :website_url, :facebook_url, :twitter_url, :youtube_url, :instagram_url)
    end
  end
end
