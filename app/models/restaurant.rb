class Restaurant < ApplicationRecord
  has_many :foods, dependent: :destroy
  # foodsモデルを介して、line_foodsモデルとの関連付けを行う。foodsとは多対多の関係ではなく、line_foodsへショートカットするためにthroughを設定する
  # @resutaurant.line_foodsで指定したrestaurant_idに則したline_foodsを取得する。
  has_many :line_foods, dependent: :destroy

  validates :name, :fee, :time_required, presence: true
  validates :name, length: { maximum: 30 }
  validates :fee, numericality: { greater_than: 0} 
end