Rails.application.routes.draw do
  get 'comments/create'

  devise_for :users
  resources :users do
    member do
      get :following, :followers
    end
  end
  resources :posts do
    resources :comments
  end
  resources :relationships
  root 'pages#index'

  get '/home' => 'pages#home'
  get '/user/:id' => 'pages#profile'
  get '/search' => 'pages#search'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
