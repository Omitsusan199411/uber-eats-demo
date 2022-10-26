class Api::V1::OrdersController < ApplicationController
  def create
    @posted_line_foods = LineFood.where(id: params[:line_food_ids])
    # orderインスタンスを新規作成
    @order = Order.new(
      total_price: total_price(@posted_line_foods)
    )
    if @order.save_with_update_line_foods!(@posted_line_foods)
      render json: { SuccessMessage: '注文を確定しました。また、line_foodsテーブルのactiveカラムをfalseにしました。' }, status: :created
    else
      render json: { ErrorMessage: 'ロールバックが発生しました' }, status: :internal_server_error
    end
  end

  private

  # 関数的メソッド
  # 注文する際のトータルコストは、仮注文商品類のコスト+その店舗の固定費（fee）
  def total_price(posted_line_foods)
    # 以下は、「posted_line_foods.sum { |line_food| line_food.total_amount } + posted_line_foods.first.restaurant.fee」の意味
    posted_line_foods.sum(&:total_amount) + posted_line_foods.first.restaurant.fee
  end
end
