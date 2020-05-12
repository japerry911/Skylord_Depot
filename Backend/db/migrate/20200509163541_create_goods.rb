class CreateGoods < ActiveRecord::Migration[6.0]
  def change
    create_table :goods do |t|
      t.string :name
      t.text :description
      t.decimal :price, precision: 10, scale: 2
      t.string :card_image
      t.string :detail_image1
      t.string :detail_image2
      t.string :product_type
    end
  end
end
