class CreateUsersSnsCredentials < ActiveRecord::Migration[6.0]
  def change
    create_table :users_sns_credentials do |t|
      t.string :provider_uid, null: false
      t.string :provider_name, null: false
      t.references :user, null: false, foregin_key: true
      t.timestamps
    end
    add_index :users_sns_credentials, %i[provider_uid provider_name], unique: true
  end
end
