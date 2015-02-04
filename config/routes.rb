Rails.application.routes.draw do
  root 'static_pages#root'

  resource :users
  resource :session

  namespace :api, defaults: { format: :json } do
    resources :songs, only: [:index, :show, :edit, :new]
  end
end
