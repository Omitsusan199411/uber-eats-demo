class Api::V1::SessionsController < ApplicationController
  def sign_in
    @user = User.find_by(email: session_params[:email])
    if @user && @user.authenticate(session_params[:password])
      @user.login!
      render json: { logged_in: true, user: @user }, status: :created
    else
      render json: { errors: ['認証に失敗しました', '正しいメールアドレス・パスワードを入力し直すか、新規登録を行ってください。'] }, status: :unauthorized
    end
  end

  def sign_out
    reset_session
    reder json: { logged_out: true, message: 'サインアウトしました' }, status: :ok
  end

  def logged_in?
    if @user.current_user
      render json: { logged_in: true, user: @current_user }
    else
      render json: { logged_in: false, message: 'ユーザーが存在しません' }
    end
  end

  private

  def session_params
    params.permit(:email, :password )
  end
end