class Api::V1::FoodsController < ApplicationController
  def index
    restaurant = Restaurant.find(params[:restaurant_id])
    foods = restaurant.foods
    # 取得したfoodsデータから関連モデルであるrestaurantデータを取得し、foodsデータと一緒にその中のnameカラムをjson形式でreactに返す
    render json: foods.to_json(include: [restaurant: { only: :name }]), status: :ok
  end
end
