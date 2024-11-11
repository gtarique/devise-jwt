# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  respond_to :json
  private

  def respond_with(resource, _opts = {})
    render json: { message: "Logged in successfully", user: resource }, status: 200
  end

  def respond_to_on_destroy
    render json: { message: "Logged out successfully."}, status: 200
  end
end
