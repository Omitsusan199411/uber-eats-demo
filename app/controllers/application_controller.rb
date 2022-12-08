class ApplicationController < ActionController::API
  before_action :fake_load
  # Railsがトークン認証しないようにするため
  skip_before_action :verify_authenticity_token
  # StandardErrorはNoMethodErrorやArgumentErrorの親クラス
  rescue_from StandardError, with: :rescue500

  def fake_load
    sleep(1)
  end

  private

  # 例外処理のメソッド
  # statusを設定しないとHTTPステータスコード200がフロントエンド側に返り、フロント側では通信が正常と見なされてしまうので、必ず設定すること。（今回は、500番台で設定）
  # createとreplaceアクションに対する例外処理
  def rescue500(error)
    logger.error error.class
    logger.error error.message
    logger.error error.traceback.join("\n")
    render json: { ErrorMessage: "#{error.message}が発生しました" }, status: :internal_server_error
  end
end
