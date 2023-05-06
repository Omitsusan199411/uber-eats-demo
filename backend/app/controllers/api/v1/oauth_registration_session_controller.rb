class Api::V1::OauthRegistrationSessionController < ApplicationController
  def sign_up_or_sign_in
    if User.find_by(email: oauth_registration_session_params[:email])
      # 既にsns認証情報が登録されていた時の処理
      @user = User.find_by(email: oauth_registration_session_params[:email])
      login!(@user)
      binding.pry
      render json: @user.attributes.merge(sign_in_state: true), status: :created
    else
      # 未登録時の処理
      # パスワードをランダム生成
      random_str = SecureRandom.uuid
      random_str_password = BCrypt::Password.create(random_str)
      @user = User.new(email: oauth_registration_session_params[:email], name: oauth_registration_session_params[:name], password_digest: random_str_password)
      @user_sns_credential = @user.build_users_sns_credential(provider_uid: oauth_registration_session_params[:provider_uid], provider_name: oauth_registration_session_params[:provider_name])
      binding.pry
      if @user.valid? && @user_sns_credential.valid?
        @user.save!
        @user_sns_credential.save!
        login!(@user)
        binding.pry
        render json: @user.attributes.merge(sign_in_state: true), status: :created
      else
        binding.pry
        render json: { message: '認証に失敗しました。' }, status: :unauthorized
      end
    end
  end

  private

  def oauth_registration_session_params
    params.require(:oauth_registration_session).permit(:provider_uid, :provider_name, :email, :name)
  end
end
