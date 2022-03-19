class Api::V1::LineFoodsController < ApplicationController
  before_action :set_food, only: [:create]


  def index
    # line_foodsはLineFood.where(active: true)から取得した配列であり、インスタンスである。
    # total_amountは、line_foodのインスタンスメソッドである
    line_foods = LineFood.active
    if line_foods.exists?
      render json: {
        line_food_ids: line_foods.map { |line_food| line_food.id },
        restaurant: line_foods[0].restaurant,
        count: line_foods.sum { |line_food| line_food[:count] },
        amount: line_foods.sum { |line_food| line_food.total_amount },
      },status: 200
    else
      # HTTPレスポンスコード204は、「リクエストは成功したが、空データ」を指す
      render json: {}, status: 204
    end
  end

  def create
    # activeとother_restaurantはLineFoodモデルに定義されたscopeの名称
    # LineFoodテーブルにactive: trueであり、かつordered_food以外のレストランIDが存在した場合で分岐させる
    if LineFood.active.other_restaurant(@ordered_food.restaurant.id).exists?
      return render json: {
        existing_restaurant: LineFood.other_restaurant(@ordered_food.restaurant.id).first.restaurant.name,
        new_restaurant: Food.find(params[:food_id]).restaurant.name,
      },status: 406
      # HTTPステータスコード406はnot_acceptableで指定されたフォーマットで返せない場合
    end

    set_line_food(@ordered_food)

    if @line_food.save
      render json: {
        line_food: @line_food
      },status: 201
      # HTTPステータスコード201はリクエストは成功し、新規作成されたリソースのURLを返す。
    else
      # HTTPステータスコード500はサーバー内部にエラーが発生した場合に返す。
      render json: {},status: 500
    end
  end


  def replace

  end

  # line_foodsコントローラー以外からは呼び出せない。
  private
    def set_food
      @order_food = Food.find(params[:food_id])
    end

    def set_line_food(ordered_food)
      if ordered_food.line_food.present?
        @line_food = ordered_food.line_food
        @line_food.attributes = {
          count: ordered_food.line_food.count + params[:count],
          active: true
        }
      else
        @line_food = ordered_food.build_line_food(
          count: params[:count],
          restaurant: ordered_food.restaurant,
          active: true
        )
      end
    end
end