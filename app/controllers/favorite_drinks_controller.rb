class FavoriteDrinksController < ApplicationController
    def index 
       @favorite_drinks = FavoriteDrink.all
       render json: @favorite_drinks 
    end

    def show
       @favorite_drink = FavoriteDrink.find(params[:id]) 
       render json: @favorite_drink
    end
end
