Rails.application.routes.draw do
  resources :subs
  resources :messages
  resources :chat_rooms
  resources :users
  get '/sublist', to: 'subs#sublist'
  get '/login', to: 'users#login'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
