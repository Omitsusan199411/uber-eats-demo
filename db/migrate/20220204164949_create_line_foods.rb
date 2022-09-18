class CreateLineFoods < ActiveRecord::Migration[6.0]
  def change
    create_table :line_foods do |t|
      t.integer :food_id, foregin_key: true
      t.references :restaurant, null: false, foregin_key: true
      t.integer :order_id, foregin_key: true
      t.integer :count, null: false, default: 0
      t.boolean :active, null: false, default: false

      t.timestamps
    end
    # 一意な複合キーを設定する(food_idとorder_idをまとめて１つと見なし、一意なindexを貼る)。このため、単体のカラム（food_idとorder_id）はreference型に設定せずに単体の無駄なindexを貼らないようにする
    add_index :line_foods, [:food_id, :order_id], unique: true
  end
end
