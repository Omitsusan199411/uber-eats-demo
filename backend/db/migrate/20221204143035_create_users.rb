class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      # 一意制約をかける際は、indexも一緒に付与すること（一意チェックを早くするため）
      t.string :name, null: false, limit: 20
      t.string :email, null: false
      t.string :password_digest, null: false

      t.timestamps
    end
    add_index :users, :name, unique: true
    add_index :users, :email, unique: true
    add_index :users, :password_digest, unique: true
  end
end
