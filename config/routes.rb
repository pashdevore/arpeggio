Rails.application.routes.draw do
  root 'static_pages#root'

  resources :users
  resource :session

  namespace :api, defaults: { format: :json } do
    resources :songs
    resources :profiles
    resources :song_likes
    resources :tags
    resources :taggings
  end
end
