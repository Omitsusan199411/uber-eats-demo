class Api::V1::OrdersController < ApplicationController

  def create
    @posted_line_foods = LineFood.where(id: params[:line_food_ids])
    # orderインスタンス
    @order = Order.new(
      total_price: total_price(@posted_line_foods)
    )
    binding.pry
    if @order.save_with_update_line_foods!(@posted_line_foods)
      render json: {},status: 201
    else
      render json: {},status: 500
    end
  end

  private

  # 注文する際のトータルコストは仮注文商品のコスト+その店舗の固定費（fee）
  def total_price(posted_line_foods)
    posted_line_foods.sum {|line_food| line_food.total_amount} + posted_line_foods.first.restaurant.fee
  end
end