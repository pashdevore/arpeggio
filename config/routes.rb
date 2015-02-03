Rails.application.routes.draw do
  root 'static_pages#root'

  resource :users
  resource :session
end
