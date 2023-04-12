class User < ApplicationRecord
  # has_secure_passwordメソッド（仮想的にUserモデルにpassword、password_confirmation属性が追加され、authenticateメソッドも使えるようになる。またpassword関連のバリデーションを追加してくれる）
  has_secure_password
  has_many :line_foods, dependent: :destroy

  # validation
  # password_digestのバリデーションはbcryptにて標準実装されているので省略
  validates :name, presence: true, uniqueness: true
  # case_sensitiveは小文字・大文字の判別をしない
  validates :email, presence: true, uniqueness: { case_sensitive: false }
  validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i }
end
