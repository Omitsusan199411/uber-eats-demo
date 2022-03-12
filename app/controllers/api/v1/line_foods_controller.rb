class Api::V1::LineFoodsController < ApplicationController
  before_action :set_food, only: [:create]


  # line_foodsコントローラー以外からは呼び出せない
  private
    def set_food
      @order_food = Food.find(params[:food_id])
    end
end