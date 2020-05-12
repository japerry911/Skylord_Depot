class OrderItemsController < ApplicationController
    def index
        @order_items = OrderItem.all

        render json: { order_items: @order_items }, include: :good
    end
end
