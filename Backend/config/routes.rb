Rails.application.routes.draw do
  resources :goods, only: [:index, :show]
  post '/login', to: 'sessions#login'
end
