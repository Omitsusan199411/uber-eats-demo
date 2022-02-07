class CreateLineFoods < ActiveRecord::Migration[6.0]
  def change
    create_table :line_foods do |t|
      t.references :food, null: false, foregin_key: true
      t.references :restaurant, null: false, foregin_key: true
      t.references :order, foregin_key: true
      t.integer :count, null: false, defalut: 0
      t.booleam :active, null: false, defalut: false

      t.timestamps
    end
  end
end
