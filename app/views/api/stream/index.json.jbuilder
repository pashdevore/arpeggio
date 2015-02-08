json.array! @stream_songs, :id, :title, :description, :created_at, :updated_at

# json.songs @user.songs do |song|
#   json.extract! song, :title, :description, :created_at, :updated_at
# end
#
# json.followers @user.followers do |follower|
#   json.extract! follower, :id,
#                           :username,
#                           :avatar_url,
#                           :first_name, :last_name,
#                           :city, :state, :country,
#                           :biography,
#                           :website_url, :facebook_url, :twitter_url, :youtube_url, :instagram_url
# end
#
# json.following @user.following do |following|
#   json.extract! following, :id,
#                            :username,
#                            :avatar_url,
#                            :first_name, :last_name,
#                            :city, :state, :country,
#                            :biography,
#                            :website_url, :facebook_url, :twitter_url, :youtube_url, :instagram_url
# end
