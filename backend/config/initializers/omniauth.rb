Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, ENV.fetch('GOOGLE_OAUTH_CLIENT_ID'), ENV.fetch('GOOGLE_OAUTH_SECRET_KEY')
  provider :facebook, ENV.fetch('FACEBOOK_OAUTH_APP_ID'), ENV.fetch('FACEBOOK_OAUTH_APP_SECRET_KEY')
end