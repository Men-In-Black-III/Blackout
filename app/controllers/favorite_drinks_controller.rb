class FavoriteDrinksController < ApplicationController
    def index 
      p params[:user_id]
      favorite_drinks = FavoriteDrink.all
      render json: favorite_drinks, include: :drink
    end    
end
