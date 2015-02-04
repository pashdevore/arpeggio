module Api
  class ProfileController < ApiController
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
      render :show
    end

    def destroy
      @profile = Profile.find(params[:id])
      @profile.destroy
      
    end

    private
    def profile_params
      params.require(:profile).permit(:first_name, :last_name, :gravatar_url, :city, :state, :country)
    end
  end
end
