# CV（（コントローラーやビュー）の中で共通化したいヘルパーメソッドを書くこと
module SessionsHelper
  # 認証に成功したユーザー情報をsessionストアー（session:IDとそれに紐づくユーザー情報）に保存する。※Rails側に情報をもたす
  # session情報をcookieストアーに保存するかどうかの設定はconfig/application.rbで行う（ActionDispatch::Session::CookieStore）。※ブラウザ側に情報をもたす
  def login!(user)
    session[:user_id] = user.id
  end

  # 現在ログインしているユーザー情報を取得
  def current_user
    # ||=は、@current_userがnilの時に値を入れることができる
    # findメソッドはモデルのインスタンスを返す
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  # ユーザーがサインインしているかどうか
  def user_sign_in?(current_user)
    current_user != nil
  end
end
