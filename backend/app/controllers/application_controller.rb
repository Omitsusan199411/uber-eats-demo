class ApplicationController < ActionController::API
  before_action :fake

  def fake
    sleep(3)
  end

  # エラーハンドル（レスキュー）に関するカスタムモジュールをinclude
  include ErrorHandle
  # login!やcurrent_userヘルパメソッドをinclude
  include SessionsHelper
end
