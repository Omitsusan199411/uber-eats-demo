class Order < ApplicationRecord
  has_many :line_foods, dependent: :destroy
  validates :total_price, numericality: { greater_than: 0 }

  # Orderクラスのインスタンスメソッド
  # メソッド全体が例外処理の対象になる場合はbegin/endを省略できる
  def save_with_update_line_foods!(posted_line_foods)
    # Application::Base.transactionでトランザクション処理を実現できる。このメソッドには例外処理を含んでいる。例外処理が発生するとロールバックするようにデフォルトで準備されている。
    # transactionメソッドのブロック内の処理は、最終的にデフォルトで用意されているwithin_new_transactionメソッド内で処理が実行される。このメソッド内にはrescue文、raiseが既に用意されており、そこにはロールバックする処理が記述されている
    # => このため、transactionのブロック内でrescueを自分で書いてしまうとそちらが優先され、ロールバックできなくなるので注意。
    ActiveRecord::Base.transaction do
      # transactionメソッドには、ブロック内の処理で例外が発生した場合にrescueして、ロールバックするという処理がデフォルトで実装されている
      # クラスメソッド内で使用するselfはクラス（Orderクラス）を指し、インスタンスメソッド内でのselfはインスタンス（orderインスタンス）を指す。
      # save!とupdate!のどちらかに失敗した場合は、orders_controller.rbのrescue500が実行される。
      save!
      posted_line_foods.each do |line_food|
        line_food.update!(active: false, order_id: id)
      end
    end
  end

  attr_accessor :orders
end
