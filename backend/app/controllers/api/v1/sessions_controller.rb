class Api::V1::SessionsController < ApplicationController
  def sign_in
    @user = User.find_by(email: session_params[:email])
    if @user&.authenticate(session_params[:password]) # nilとfalseは「偽」、認証できれば、Userオブジェクトを返す
      # login!のレシーバはApi::V1::SessionsControllerのインスタンス(sessions_helper.rbのSessionsHelperモジュールからinclude)
      login!(@user)
      # mergeメソッドを使用するために、Userモデル（@userのモデル）をハッシュに変換
      user_hash = @user.attributes
      render json: user_hash.merge(sign_in_state: true), status: :created
    else
      render json: { message: '認証に失敗しました。' }, status: :unauthorized
    end
  end

  def sign_out
    reset_session
    reder json: { sign_out_state: true, message: 'サインアウトしました' }, status: :ok
  end

  def signed_in?
    # current_userメソッドのレシーバはApi::V1::SessionsControllerのインスタンス(sessions_helper.rbのSessionsHelperモジュールからinclude)
    if current_user
      current_user_hash = @current_user.attributes
      render json: current_user_hash.merge(sign_in_state: true), status: :ok
    else
      render json: { sign_in_state: false, message: 'ユーザーが存在しません' }, status: :ok
    end
  end

  private

  def session_params
    params.permit(:email, :password)
  end
end
