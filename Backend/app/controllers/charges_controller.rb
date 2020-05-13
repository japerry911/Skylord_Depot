class ChargesController < ApplicationController
    def secret
        Stripe.api_key = Rails.application.credentials.stripe[:stripe_secret_key]

        intent = Stripe::PaymentIntent.create({
            amount: 100000,
            currency: 'usd',
            metadata: { integration_check: 'accept_a_payment' }
        })

        render json: { client_secret: intent.client_secret }
    end
end
