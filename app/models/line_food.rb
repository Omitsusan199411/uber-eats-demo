class LineFood < ApplicationRecord
  # optional: trueとすることで関連付け（外部キー）がなくてもエラーが出ないことを指す。任意の関連付け。
  belongs_to :food
  belongs_to :restaurant
  belongs_to :order, optional: true

  validates :count, numericality: { greater_than: 0 }
  # 一意な複合キーのバリデーション（アプリケーション側でチェック。DB側のチェックはmigrationで記述している）
  validates :order_id, uniqueness: { scope: :food_id }

  # scopeを使用した場合。返り値は必ずActiveRecord_Relation（インスタンス）の形で返す。「モデル名.スコープ名」という形で使用する
  # whereメソッドの返り値はActiveRecord_Relationのインスタンスを返す。
  scope :active, -> { where(active: true) }
  # 例外パターンの処理。他の店舗のLineFoodがあるかどうかをチェックする.
  # picked_restaurant_id以外のレコードを取得。picked_restaurant_idは引数を表す
  scope :other_restaurant, ->(picked_restaurant_id) { where.not(restaurant_id: picked_restaurant_id) }

  def total_amount
    food.price * count
  end
end
