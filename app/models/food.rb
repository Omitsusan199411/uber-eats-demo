class Food < ApplicationRecord
  belongs_to :restaurant
  # has_one :line_food
  has_many :line_foods, dependent: :destroy
end