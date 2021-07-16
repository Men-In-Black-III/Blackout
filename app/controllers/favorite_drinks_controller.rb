class FavoriteDrinksController < ApplicationController
    def destroy 
       favorite_drinks = FavoriteDrink.where({user_id:current_user.id, drink_id:params[:id]})
    if favorite_drinks.destroy_all.length != 0
        render json: favorite_drinks
    else
        render status: 418
    end
    end
end