class Api::V1::FoodsController < ApplicationController
  def index
    restaurant = Restaurant.find(params[:restaurant_id])
    foods = restaurant.foods

    render json: foods.to_json(include: [:restaurant])
  end
end
