Rails.application.routes.draw do
  resources :goods, only: [:index, :show]
end
