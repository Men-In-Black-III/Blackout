Rails.application.routes.draw do
  resources :favorite_drinks
  resources :drinks
  devise_for :users, controllers: {
    sessions: 'users/sessions'
  }
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root 'home#index'
end
