class GoodsController < ApplicationController
    def index
        @goods = Good.all

        render json: { goods: @goods }
    end

    def show 
        @good = Good.find(params[:id])

        render json: { good: @good }
    end
end
