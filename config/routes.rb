Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # APIモードのため、Viewが存在しない。よって必要なのはAPIのURLのみ
  namespace :api do
    # API更新のことを考えて、URL自体にバージョン番号(v1)を持たせる。Web APIは多くの人がAPI機能を利用することを想定して、URLにバージョン（v〇〇）を埋め込む方法が利用される
    namespace :v1 do
      resources :restaurants do
        # FoodモデルはRestaurantモデルに従属する
        resources :foods, only: [:index, :new, :create]
      end
      resources :line_foods, only: [:index, :create]
      put 'line_foods/replace', to: 'line_foods#replace'
      resources :orders, only: [:create]
    end
  end
end
