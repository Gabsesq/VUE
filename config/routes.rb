Rails.application.routes.draw do
  resources :books
  resources :counties
  resources :libraries
  resources :people
  resources :items, only: [:index]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
