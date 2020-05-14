Rails.application.routes.draw do
  resources :goods, only: [:index, :show]
  resources :sessions, only: [:create, :show]
  resources :registrations, only: [:create]
  resources :order_items, only: [:create, :destroy]
  resources :orders, only: [:create, :destroy, :update]
  delete '/clear_cart/:id', to: 'order_items#destroy_all'
  delete :logout, to: 'sessions#logout'
  get :logged_in, to: 'sessions#logged_in'
  get '/secret/:id', to: 'charges#secret'
  post '/contact-send-email', to: 'contact#send_email'
end
