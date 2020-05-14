class ContactMailer < ApplicationMailer
    def send_email(email_contents)
        @email_contents = email_contents
        mail(subject: 'Website Contact Submission')
    end
end