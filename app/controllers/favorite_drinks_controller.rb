class FavoriteDrinksController < ApplicationController
    def index 
      favorite_drinks = FavoriteDrink.all
      render json: favorite_drinks, include: :drink
    end    
end
