Rails.configuration.stripe = {
    :publishable_key => ENV['RAILS_ENV'] == 'production' ? ENV['STRIPE_P_KEY'] : Rails.application.credentials.stripe[:publishable_key],
    :secret_key =>  ENV['RAILS_ENV'] == 'production' ? ENV['STRIPE_S_KEY'] : Rails.application.credentials.stripe[:stripe_secret_key]
}

Stripe.api_key = Rails.configuration.stripe[:secret_key]