Rails.application.routes.draw do
  scope '/api' do
  resources :enrollments, only: [:create, :destroy]
  resources :courses, only: [:create, :update, :destroy, :patch, :index]
  resources :users, only: [:index]

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  end
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
