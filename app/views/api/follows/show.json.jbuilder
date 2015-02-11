json.extract! @user, :id,
                     :username,
                     :avatar_url,
                     :first_name, :last_name,
                     :city, :state, :country,
                     :biography,
                     :website_url, :facebook_url, :twitter_url, :youtube_url, :instagram_url

if @user.followed_by?(current_user)
  json.follow do
    json.id current_user.followers.find_by(follower_id: @user.id).id
  end
end
