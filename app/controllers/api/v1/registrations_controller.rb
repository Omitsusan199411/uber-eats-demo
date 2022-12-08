class Api::V1::RegistrationsController < ApplicationController

  def sign_up
    @user = User.new(registrations_params)
    if @user.save!
      login!
      render json: { user: @user, status: :created }
    else
      render json: { error: "ユーザー登録に失敗しました" }, status: :internal_server_error
    end
  end

  private

  def registrations_params
    # db上ではbcryptにより、「password_digest」で登録されているので注意
    params.permit(:email, :name, :password, :password_confirmation)
  end
end