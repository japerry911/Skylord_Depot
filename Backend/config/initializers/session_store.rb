if Rails.env == "production"
    Rails.application.config.session_store :cookie_store, key: "_authentication_app", domain: "skylord-depot-backend.herokuapp.com"
else
    Rails.application.config.session_store :cookie_store, key: "_authentication_app"
end