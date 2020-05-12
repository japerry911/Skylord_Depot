class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.decimal :total_price, precision: 10, scale: 2
      t.string :processed
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
