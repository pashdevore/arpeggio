json.array! @users do |user|
json.extract! user, :id, :username,
                    :avatar_url,
                    :first_name, :last_name,
                    :city, :state, :country,
                    :biography,
                    :website_url, :facebook_url, :twitter_url, :youtube_url, :instagram_url
end

# json.songs @user.songs do |song|
#   json.extract! song, :title, :description, :image_url, :thumbnail_url, :created_at, :updated_at
# end
#
# json.followers @user.followers do |follower|
#   json.extract! follower, :id,
#   :username,
#   :avatar_url,
#   :first_name, :last_name,
#   :city, :state, :country,
#   :biography,
#   :website_url, :facebook_url, :twitter_url, :youtube_url, :instagram_url
# end
#
# json.following @user.following do |following|
#   json.extract! following, :id,
#   :username,
#   :avatar_url,
#   :first_name, :last_name,
#   :city, :state, :country,
#   :biography,
#   :website_url, :facebook_url, :twitter_url, :youtube_url, :instagram_url
# end
