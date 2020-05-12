Rails.application.routes.draw do
  resources :goods, only: [:index, :show]
  resources :sessions, only: [:create]
  resources :registrations, only: [:create]
  resources :order_items, only: [:index]
  delete :logout, to: 'sessions#logout'
  get :logged_in, to: 'sessions#logged_in'
end
