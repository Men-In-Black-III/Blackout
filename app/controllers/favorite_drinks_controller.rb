class FavoriteDrinksController < ApplicationController
    def destroy 
       favorite_drinks = FavoriteDrink.where({user_id:current_user.id , drink_id:params[:id]}) 
        favorite_drinks.destroy_all
        render json: status: :ok
    end
end