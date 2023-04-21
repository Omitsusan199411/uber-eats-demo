class UsersSnsCredential < ApplicationRecord
  belongs_to :user

  validates :uid, uniqueness: { scope: :provider }
end
