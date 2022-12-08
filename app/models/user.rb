class User < ApplicationRecord
  # has_secure_passwordメソッド
  has_secure_password
  has_many :line_foods

  # validation
  # password_digestのバリデーションはbcryptにて標準実装されているので省略
  validates :name, presence: true, uniqueness: true
  # case_sensitiveは小文字・大文字の判別をしない
  validates :email, presence: true, uniqueness: { case_sensitive: false }, length: { in: 1..12 }
  validates_format_of :email, with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i

  def login!
    session[:user_id] = @user.id
  end

  def current_user
    # ||=は、@current_userがnilの時に値を入れることができる
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end
end
