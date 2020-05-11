class RegistrationsController < ApplicationController
    def create
        @user = User.create(
            username: user_params[:username],
            password: user_params[:password],
            password_confirmation: user_params[:password]
        )

        if @user
            session[:user_id] = @user.id

            render json: { status: :created, user: @user }
        else
            render json: { status: 500 }
        end

    end

    private

        def user_params
            params.require(:user).permit(:username, :password)
        end
end
