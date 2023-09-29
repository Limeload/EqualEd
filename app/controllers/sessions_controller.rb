class SessionsController < ApplicationController
  skip_before_action :authorize, only: :create

end
