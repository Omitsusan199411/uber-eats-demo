class CreateUsersSnsCredentials < ActiveRecord::Migration[6.0]
  def change
    create_table :users_sns_credentials do |t|
      t.string :uid, null: false
      t.string :provider, null: false
      t.references :user, null: false, foregin_key: true
      t.timestamps
    end
    add_index :users_sns_credentials, %i[uid provider], unique: true
  end
end
