# Be sure to restart your server when you modify this file.

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.

# Read more: https://github.com/cyu/rack-cors

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  # 開発環境用のOrigin
  allow do
    origins 'http://localhost:3000'
    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head], # プリフライトリクエスト（異なるオリジン間）のため：optionsが必要
      credentials: true # Cookieの受け取りを許可。この場合、allow originsの設定にワイルドカードを使ってはいけない
  end

  # # 本番環境用のOrigin
  # allow do
  #   origin 'https://'
  #   resource '*',
  #     headers: :any,
  #     methods: [:get, :post, :put, :patch, :delete, :options, :head],
  #     credentials: true
  # end
end
