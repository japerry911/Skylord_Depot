class ChargesController < ApplicationController
    def create
        Stripe.api_key = Rails.application.credentials.stripe[:stripe_secret_key]

        user_to_be_processed = User.find(order_params[:user_id])

        puts 'HERERERERE'
        puts user_to_be_processed
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
            params.require(:order).permit([:user_id, :token])
        end
end
