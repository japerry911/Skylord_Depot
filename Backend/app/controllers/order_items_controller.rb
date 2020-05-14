class OrderItemsController < ApplicationController
    def create
        order_item = OrderItem.find_by(user: order_item_params[:user], good: order_item_params[:good])

        if order_item_params[:quantity] == "0"
            order_item.destroy
        else 
            if order_item
                return_order_item = order_item.update(quantity: order_item_params[:quantity])
            else
                user = User.find(order_item_params[:user])
                good = Good.find(order_item_params[:good])

                return_order_item = OrderItem.create(user: user, good: good, quantity: order_item_params[:quantity])
            end
        end

        render status: :ok
    end

    def destroy
        order_item_to_destroy = OrderItem.find(params[:id])

        order_item_to_destroy.destroy

        render status: :ok
    end

    def destroy_all
        order_items_to_destroy = OrderItem.where('user_id = ?', params[:id])

        order_items_to_destroy.destroy_all

        render status: :ok
    end

    private

        def order_item_params
            params.require(:order_item).permit(:user, :good, :quantity)
        end
end
