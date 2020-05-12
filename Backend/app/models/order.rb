class Order < ApplicationRecord
    belongs_to :user
    has_many :purchased_items
    has_many :goods, through: :purchased_item
end
