module Api
  class ProfilesController < ApiController
    def index
      @profiles = Profile.all
      render json: @profiles
    end

    def new
      @profile = Profile.new
    end

    def create
      @profile = Profile.new(profile_params)

      if @profile.save
        redirect_to root_url
      else
        @profile = Profile.new
        render :new
      end
    end

    def show
      @profile = Profile.find(params[:id])
      @user = User.find(@profile.user_id)
      @songs = @user.songs
      @followers = @user.followers
      @following = @user.following
      render :show
    end

    def destroy
      @profile = Profile.find(params[:id])
      @profile.destroy
    end

    def update
      @profile = Profile.find(params[:id])

      if @profile.update_attributes(profile_params)
        render :show
      else
        redirect_to root_url
      end
    end

    private
    def profile_params
      params.require(:profile).permit(:user_id, :first_name, :last_name, :gravatar_url, :city, :state, :country)
    end
  end
end
