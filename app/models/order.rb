class Order < ApplicationRecord
  has_many :line_foods

  validates :total_price, numericality: { greater_than: 0 }
  
  def save_with_update_line_foods!(line_foods)
    # Application::Base.transactionでトランザクション処理を実現できる。
    # トランザクション処理にするのは、LineFoodデータの更新とOrderデータへの保存のうち、どちらか一方が失敗した時にブロック内の処理をなくすため
    ActiveRecord::Base.transaction do
      line_foods.each do |line_food|
        # update_attributes!はvalidationで引っかかった場合にfalseではなく、例外（ActiveRecord::RecordInvalid エラー文）を返す。
        # 例外が発生するかもしれない処理
        line_food.update_attributes!(active: false, order: self)
      end
      # 例外が発生しなかった場合の処理
      self.save!
    end
  end
end