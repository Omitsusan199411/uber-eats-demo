class Order < ApplicationRecord
  has_many :line_foods

  validates :total_price, numericality: { greater_than: 0 }
  
  # インスタンスメソッド
  def save_with_update_line_foods!(line_foods)
    # Application::Base.transactionでトランザクション処理を実現できる。
    # トランザクション処理にするのは、LineFoodデータの更新とOrderデータへの保存のうち、どちらか一方が失敗した時にブロック内の処理をなくすため
    ActiveRecord::Base.transaction do
      # 更新するorderインスタンス自体を保存。save!はインスタンスメソッドであり、失敗すると例外処理rescue節で処理
      # クラスメソッド内で使用するselfはクラス（Orderクラス）を指し、インスタンスメソッド内でのselfはインスタンス（orderインスタンス）を指す。
      self.save!
      line_foods.each do |line_food|
        # orderインスタンスの保存に伴い、仮注文（LineFoodsの各インスタンス）のactiveとorder_idを更新する 
        # order: selfはorder_id: self.idを指す
        binding.pry
        line_food.update!(active: false, order_id: self.id)
        binding.pry
      end
    end
  end
end