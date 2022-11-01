class Api::V1::OrdersController < ApplicationController
  def create
    @posted_line_foods = LineFood.where(id: params[:line_food_ids])
    # orderインスタンスを新規作成
    @order = Order.new(
      total_price: total_price(@posted_line_foods)
    )
    # transactionがロールバックした場合の後に実行される。transactionメソッドにはロールバック後にraiseが実装されているため、そこから処理が飛んでくる
    @order.save_with_update_line_foods!(@posted_line_foods)
  end

  private

  # 関数的メソッド
  # 注文する際のトータルコストは、仮注文商品類のコスト+その店舗の固定費（fee）
  def total_price(posted_line_foods)
    # 以下は、「posted_line_foods.sum { |line_food| line_food.total_amount } + posted_line_foods.first.restaurant.fee」の意味
    # total_amountはLineFoodクラスのインスタンスメソッド
    posted_line_foods.sum(&:total_amount) + posted_line_foods.first.restaurant.fee
  end
end
