class UsersController < ApplicationController
  def index
    render json: { resutl: 'success' }, status: :ok
  end
end
