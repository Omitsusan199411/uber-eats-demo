class Api::V1::LineFoodsController < ApplicationController
  before_action :ordered_food, only: %i[create replace]

  def index
    # line_foodsはLineFood.where(active: true)から取得した配列であり、インスタンスである。
    # total_amountは、line_foodのインスタンスメソッドである
    # line_foodsのactiveがtrueでorder_idが空のline_foodsだけ取得する
    line_foods = LineFood.active
    # line_foods = LineFood.active
    if line_foods.exists?
      render json: {
        # mapメソッドで特定のカラムを抽出し、配列で返す。
        # 以下は、「line_food_ids: line_foods.map { |line_food| line_food.id }」「amount: line_foods.sum { |line_food| line_food.total_amount }」と言う意味。
        line_food_ids: line_foods.map(&:id),
        restaurant: line_foods[0].restaurant,
        count: line_foods.sum { |line_food| line_food[:count] },
        amount: line_foods.sum(&:total_amount)
      }, status: :ok
    else
      # HTTPレスポンスコード204は、「リクエストは成功したが、空データ」を指す
      render json: {}, status: :no_content
    end
  end

  def create
    # activeとother_restaurantはLineFoodモデルに定義されたscopeの名称
    # LineFoodテーブルにactive: trueであり、かつordered_food以外のレストランIDが存在した場合で分岐させる
    if LineFood.active.other_restaurant(@ordered_food.restaurant.id).exists?
      return render json: {
        existing_restaurant: LineFood.active.other_restaurant(@ordered_food.restaurant.id).first.restaurant.name,
        new_restaurant: Food.find(params[:food_id]).restaurant.name
      }, status: :not_acceptable
      # HTTPステータスコード406はnot_acceptableで指定されたフォーマットで返せない場合
    end
    # will_save_line_foodはprivate以下で定義。@ordered_foodはordered_food関数の返り値。before_actionで実行している
    will_save_line_food(@ordered_food)
    begin
      # @line_foodはwill_save_line_food関数の返り値
      @line_food.save!
      render json: {
        line_food: @line_food
      }, status: :created
    rescue StandardError => e
      logger.error e
      render json: { ErrorMessage: '仮注文に新規登録、更新できませんでした' }, status: :internal_server_error
    end
  end

  def replace
    # eachメソッドはmapメソッドと違い繰り返し処理を行うだけ。eachメソッドは配列で返さない
    LineFood.active.other_restaurant(@ordered_food.restaurant.id).each do |line_food|
      line_food.update(:active, false)
    end
    will_save_line_food(@ordered_food)
    begin
      @line_food.save!
      render json: {
        line_food: @line_food
      }, status: :created
    rescue StandardError => e
      logger.error e
      render json: { ErrorMessage: '既にactive状態の仮注文を入れ替えることができませんでした' }, status: :internal_server_error
    end
  end

  # line_foodsコントローラー以外からは呼び出せない。
  private

  def ordered_food
    @ordered_food = Food.find(params[:food_id])
  end

  # 既に@ordered_foodに紐づくline_foodインスタンスが存在するかの有無を確認し条件分岐。
  # line_foodインスタンスの中のcountとactiveの値を書き換え。
  def will_save_line_food(ordered_food)
    if LineFood.exists?(food_id: ordered_food, order_id: nil)
      (
            # 選択したfoodのid（@ordered_food）かつ、order_idがNULLのレコードを抽出
            @line_food = LineFood.find_by(food_id: ordered_food, order_id: nil)
            @line_food.attributes = {
              count: @line_food.count + params[:count],
              active: true
            }
            # 選択したfoodのid（@ordered_food）、つまりfood_idがline_foodsテーブルに存在しなかった場合（仮注文に登録されていないfood）
          )
    else
      (@line_food = ordered_food.line_foods.new(
        count: params[:count],
        restaurant: ordered_food.restaurant,
        active: true
      ))
    end
  rescue StandardError => e
    logger.error e
  end
end
