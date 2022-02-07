class CreateFoods < ActiveRecord::Migration[6.0]
  def change
    create_table :foods do |t|
      t.string :name, null: false
      t.integer :price, null: false
      t.text :description, null: false

      t.timestanps
    end
  end
end
