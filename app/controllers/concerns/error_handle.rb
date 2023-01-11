module ErrorHandle
  # ActiveSupport::Concernモジュールに定義されたメソッドをErrorHandleモジュールのクラスメソッドとして使用可能（絶対に必要）
  extend ActiveSupport::Concern
  # モジュールがincludeされた後にrescue_fromメソッドが動作できるようにする（NoMethodErrorの防止）
  included do
    # StandardErrorはNoMethodErrorやArgumentErrorの親クラス
    rescue_from StandardError, with: :render_500
  end

  private
  # 例外処理のメソッド
  # statusを設定しないとHTTPステータスコード200がフロントエンド側に返り、フロント側では通信が正常と見なされてしまうので、必ず設定すること。（今回は、500番台で設定）
  # createとreplaceアクションに対する例外処理
  def render_500(e)
    logger.error e.class
    logger.error e.message
    logger.error e.backtrace.join("\n")
    render json: { ErrorMessage: "#{e.message}" }, status: :internal_server_error
  end
end