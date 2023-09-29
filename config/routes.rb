Rails.application.routes.draw do
  resources :courses, only: [:create, :update, :destroy, :patch]

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
