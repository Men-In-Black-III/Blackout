class FavoriteDrinksController < ApplicationController
    def destroy
        favorite = FavoriteDrink.find(params[:id]) 
        favorite.destroy
        render json: favorite
      end
end


