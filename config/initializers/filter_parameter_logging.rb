# Be sure to restart your server when you modify this file.

# Configure sensitive parameters which will be filtered from the log file.
# 特定のパラメータのログ出力を防ぐ
Rails.application.config.filter_parameters += [:password]
