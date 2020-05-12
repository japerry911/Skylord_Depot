class ChargesController < ApplicationController
    def create
        Stripe.api_key = Rails.application.credentials.stripe[:stripe_secret_key]

        Stripe::Charge.create(
            :amount => order_params[:total_price],
            :description => 'Skylord Depot TEST',
            :currency => 'usd',
            :source => order_params[:token]
        )

        render status: :ok
    end

    private

        def order_params
            params.require(:order).permit([:total_price, :token])
        end
end
