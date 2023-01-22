class User < ApplicationRecord
  # has_secure_passwordメソッド
  has_secure_password
  has_many :line_foods, dependent: :destroy

  # validation
  # password_digestのバリデーションはbcryptにて標準実装されているので省略
  validates :name, presence: true, uniqueness: true
  # case_sensitiveは小文字・大文字の判別をしない
  validates :email, presence: true, uniqueness: { case_sensitive: false }
  validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i }
end
