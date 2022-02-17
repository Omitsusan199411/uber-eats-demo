class LineFood < ApplicationRecord
  belongs_to :food
  belongs_to :restaurant
  # optional: trueとすることで関連付け（外部キー）がなくてもエラーが出ないことを指す。任意の関連付け。
  belongs_to :order, optional: true

  validates :count, numericality: { greater_than: 0 }

  # 返り値はActiveRecord_Relationの形で返す
  scope :active, -> { where(active: true) }
  # 例外パターンの処理。他の店舗のLineFoodがあるかどうかをチェックする
  scope :other_restaurant, -> (picked_restaurant_id) {where.not(restaurant_id: picked_restaurant_id)}

  def total_amount
    food.price * count
  end
end