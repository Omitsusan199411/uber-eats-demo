class Api::V1::SessionsController < ApplicationController
  def sign_in
    @user = User.find_by(email: session_params[:email])
    if @user&.authenticate(session_params[:password]) # nilとfalseは「偽」、認証できれば、Userオブジェクトを返す
      # login!のレシーバはApi::V1::SessionsControllerのインスタンス(sessions_helper.rbのSessionsHelperモジュールからinclude)
      login!(@user)
      render json: { logged_in: true, user: @user }, status: :created
    else
      render json: { message: '認証に失敗しました。' }, status: :unauthorized
    end
  end

  def sign_out
    reset_session
    reder json: { logged_out: true, message: 'サインアウトしました' }, status: :ok
  end

  def logged_in?
    # current_userのレシーバはApi::V1::SessionsControllerのインスタンス(sessions_helper.rbのSessionsHelperモジュールからinclude)
    if current_user
      render json: { logged_in: true, user: @current_user }
    else
      render json: { logged_in: false, message: 'ユーザーが存在しません' }
    end
  end

  private

  def session_params
    params.permit(:email, :password)
  end
end
