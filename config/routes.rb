Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :stream

    resources :users

    resources :songs
  end

  resources :users
  resource :session
end
