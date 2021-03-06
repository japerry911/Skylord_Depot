class SessionsController < ApplicationController
    include CurrentUserConcern

    def create
        @user = User.find_by(username: user_params['username'])
                .try(:authenticate, user_params['password'])

        if @user
            session[:user_id] = @user.id
            
            render json: { status: :created, logged_in: true, user: @user }
        else
            render json: { status: 401 }
        end
    end

    def logged_in
        if @current_user
            render json: { logged_in: true, user: @current_user }
        else
            render json: { logged_in: false }
        end
    end

    def logout
        reset_session
        render json: { status: 200 }
    end

    def show 
        @user = User.find(params[:id])

        render json: @user.to_json(only: [:username], include: { order_items: { include: { good: {}}}})
    end

    private 
        
        def user_params 
            params.require(:user).permit(:username, :password)
        end
end