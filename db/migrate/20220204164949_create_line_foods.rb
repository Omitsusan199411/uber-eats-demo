class CreateLineFoods < ActiveRecord::Migration[6.0]
  def change
    create_table :line_foods do |t|
      t.references :food, null: false, foregin_key: true
      t.references :restaurant, null: false, foregin_key: true
      t.references :order, foregin_key: true
      t.integer :count, null: false, default: 0
      t.boolean :active, null: false, default: false

      t.timestamps
    end
  end
end
