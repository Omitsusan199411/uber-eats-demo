class Api::V1::OrdersController < ApplicationController

  def create
    posted_line_foods = LineFood.where(id: params[:line_food_ids])
    # orderインスタンス
    order = Order.new{
      total_price: total_price(posted_line_foods)
    }
    if order.save_with_update_line_foods!(posted_line_foods)
      render json: {},status: 201
    else
      render json: {},status: 500
    end
  end

  private

  def total_price(posted_line_foods)
    posted_line_foods.sum {|line_food| line_food.total_amount} + posted_line_foods.first.restaurant.fee
  end
end