Rails.application.routes.draw do
  root 'static_pages#root'

  resources :users
  resource :session

  namespace :api, defaults: { format: :json } do
    resources :songs, only: [:index, :show, :edit, :new]
    resources :profiles, only: [:show, :edit, :new, :destroy]
  end
end
