class Good < ApplicationRecord
    has_many :order_items
    has_many :users, through: :order_items
end