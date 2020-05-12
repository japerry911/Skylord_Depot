Rails.application.routes.draw do
  resources :goods, only: [:index, :show]
  resources :sessions, only: [:create, :show]
  resources :registrations, only: [:create]
  resources :order_items, only: [:create, :destroy]
  delete :logout, to: 'sessions#logout'
  get :logged_in, to: 'sessions#logged_in'
end
