module SessionsHelper
  # ログインしたユーザーのIDをセッション情報に保存する
  def login!
    session[:user_id] = @user.id
  end

  # 現在ログインしているユーザー情報を取得
  def current_user
    # ||=は、@current_userがnilの時に値を入れることができる
    # findメソッドはモデルのインスタンスを返す
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  # ユーザーがサインインしているかどうか
  def user_sign_in?
    @current_user != nil
  end
end