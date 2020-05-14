class ChargesController < ApplicationController
    def secret
        order = Order.find(params[:id])

        Stripe.api_key = Rails.application.credentials.stripe[:stripe_secret_key]

        intent = Stripe::PaymentIntent.create({
            amount: (order[:total_price] * 100).to_i,
            currency: 'usd',
            metadata: { integration_check: 'accept_a_payment' }
        })

        render json: { client_secret: intent.client_secret }
    end
end
