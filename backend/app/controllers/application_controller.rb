class ApplicationController < ActionController::API
  before_action :fake

  # Cookieをコントローラーで使用するためのinclude
  include ActionController::Cookies
  # エラーハンドル（レスキュー）に関するカスタムモジュールをinclude
  include ErrorHandle
  # login!やcurrent_userヘルパメソッドをinclude
  include SessionsHelper

  # TODO: フロントエンドのレンダリングの動きを見るために試験的に導入
  def fake
    sleep(3)
  end
end
