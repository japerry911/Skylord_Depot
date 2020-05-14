class ContactController < ApplicationController
    def send_email
        ContactMailer.send_email(strong_params).deliver_now
    end

    private

        def strong_params
                params.require(:email_options).permit(:date, :email, :subject, :message)
        end
end
