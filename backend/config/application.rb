require_relative 'boot'

require 'rails'
# Pick the frameworks you want:
require 'active_model/railtie'
require 'active_job/railtie'
require 'active_record/railtie'
require 'active_storage/engine'
require 'action_controller/railtie'
require 'action_mailer/railtie'
require 'action_mailbox/engine'
require 'action_text/engine'
require 'action_view/railtie'
require 'action_cable/engine'
# require 'sprockets/railtie'
require 'rails/test_unit/railtie'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
# Gemfileに記載されているライブラリを一括でrequireしている。(bundler自体のrequireはconfig/boot.rbに記載されている)
Bundler.require(*Rails.groups)

module UberEatsDemo
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.0

    # config/locales/以下に設定した翻訳ファイルが全て読み込まれるように、以下のコードを設定する必要がある。
    config.i18n.load_path += Dir[Rails.root.join('config', 'locales', '**', '*.{rb,yml}').to_s]

    config.time_zone = 'Tokyo'

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.

    # Only loads a smaller set of middleware suitable for API only apps.
    # Middleware like session, flash, cookies can be added back manually.
    # Skip views, helpers and assets when generating a new resource.
    # apiモードの機能のみを使用する
    config.api_only = true

    # CSRF対策のチェックを行うかを指定する。5.2以降のデフォルト設定を読み込むとtrueになる
    config.action_controller.default_protect_from_forgery = true

    # gem「rails-i18n」による日本語化対応（デフォルトのlocaleを:en以外に変更する）
    config.i18n.default_locale = :ja

    # 以下2つは、RailsのAPIモードでCookie使用するための設定
    # リクエストにcookieを設定する
    config.middleware.use ActionDispatch::Cookies
    # 異なるオリジン間でCookieの送受信ができるようにするための設定（SameSite設定をnoneへ）
    config.action_dispatch.cookies_same_site_protection = :none
    # 【sessionストレージの設定】サーバーで発行したセッションをcookieに保存する役割を担う。※ブラウザ側にRails側で登録したsession情報（login!メソッド）をもたす
    # 以下、Cookie方式によるsession管理はredisに置き換えるためコメントアウト
    # config.middleware.use ActionDispatch::Session::CookieStore, key: '_auth_api_session', expire_after: 1.hour

    # redisによるsession管理を有効にする（デフォルト）
    config.middleware.use ActionDispatch::Session::RedisStore
  end
end