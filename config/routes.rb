Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :stream

    resources :users
    # resources :users do
    #   member do
    #     post 'follow'
    #   end
    # end

    resources :songs

    resources :followings

    resources :follow

    resources :followers 
  end

  resources :users
  resource :session
end
