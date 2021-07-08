class DrinksController < ApplicationController
    def index
        if !params[:user_id]
            render json: "There is no user", status:422
          else 
            user = User.find(params[:user_id]);
            render json: user.drinks
          end 
    end

    def create
        Drinks.create(name:params[:name])
    end



end
