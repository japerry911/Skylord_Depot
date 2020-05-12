class OrdersController < ApplicationController
    def create
        user = User.find(order_params[:user_id])

        @created_order = Order.create(total_price: order_params[:total_price], user: user, processed: 'PENDING')

        order_params[:items].each do |item_object|
            good = Good.find(item_object[:id])

            PurchasedItem.create(good: good, quantity: item_object[:quantity], order: @created_order)
        end

        @created_order.update(processed: 'COMPLETED')

        @order_items_to_destroy = OrderItem.find_by(user: user)
        @order_items_to_destroy.destroy

        render json: @created_order, include: { purchased_items: { include: { good: {} }}}
    end

    private

        def order_params
            params.require(:new_order).permit([:user_id, :total_price, :items => [:id, :quantity]])
        end
end