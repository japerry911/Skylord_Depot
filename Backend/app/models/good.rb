class Good < ApplicationRecord
    has_many :order_items
    has_many :users, through: :order_items
    has_many :purchased_items
    has_many :orders, through: :purchased_items
end