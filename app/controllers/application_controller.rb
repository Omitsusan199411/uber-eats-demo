class ApplicationController < ActionController::API
  # エラーハンドル（レスキュー）に関するカスタムモジュールをinclude
  include ErrorHandle
  # login!やcurrent_userヘルパメソッドをinclude
  include SessionsHelper
end
