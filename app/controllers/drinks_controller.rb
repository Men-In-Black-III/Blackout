class DrinksController < ApplicationController
    def index
        drinks = current_user.drinks
            render json: drinks
          
    end

    def create
        drink = Drink.find_by(api_id:params[:api_id])
        drink = Drink.create(drinks_params) if drink.nil? 
        favorite = FavoriteDrink.create(user: current_user, drink: drink) 
        render json: favorite
    end

    def destroy
        favorite = FavoriteDrink.find(params[:id]) 
        favorite.destroy
        render json: favorite
      end

    

    private
    def drinks_params
        params.require(:drink).permit(:name, :img_url, :ingredients, :steps, :api_id)
    end
end


