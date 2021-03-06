class User < ApplicationRecord
    has_secure_password

    validates_presence_of :username
    validates_uniqueness_of :username

    has_many :order_items
    has_many :goods, through: :order_items
    has_many :orders
end
