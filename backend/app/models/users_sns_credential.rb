class UsersSnsCredential < ApplicationRecord
  belongs_to :user, optional: true

  validates :provider_uid, uniqueness: { scope: :provider_name }
end
