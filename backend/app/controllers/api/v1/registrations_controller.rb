class Api::V1::RegistrationsController < ApplicationController
  def sign_up
    @user = User.new(registrations_params)
    # エラーがない場合にtrue
    if @user.valid?
      @user.save!
      # login!のレシーバはApi::V1::RegistrationsControllerのインスタンス(sessions_helper.rbのSessionsHelperモジュールからinclude)
      login!(@user)
      render json: { user: @user, sign_in_state: true, status: :created }
    else
      render json: { name: @user.errors.full_messages_for(:name).first, email: @user.errors.full_messages_for(:email).first, password: @user.errors.full_messages_for(:password_digest).first }, status: :internal_server_error
    end
  end

  private

  def registrations_params
    # db上ではbcryptにより、「password_digest」で登録されているので注意
    params.permit(:email, :name, :password, :password_confirmation)
  end
end
