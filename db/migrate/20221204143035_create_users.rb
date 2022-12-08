class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :email, null: false, unique: true
      # 一意制約をかける際は、indexも一緒に付与すること（一意チェックを早くするため）
      t.string :name, null: false, unique: true, limit: 12, index: true
      t.string :password_digest, null: false

      t.timestamps
    end
  end
end
