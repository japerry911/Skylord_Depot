class ChargesController < ApplicationController
    def create
        Stripe.api_key = Rails.application.credentials.stripe[:stripe_secret_key]

        order = Order.find(order_params[:order_id])
        puts 'HERERERERE'
        puts order[:total_price]
        return

        Stripe::Charge.create(
            :amount => total_price,
            :description => 'Skylord Depot TEST',
            :currency => 'usd',
            :source => order_params[:token]
        )

        render status: :ok
    end

    private

        def order_params
            params.require(:order).permit([:order_id, :token])
        end
end
