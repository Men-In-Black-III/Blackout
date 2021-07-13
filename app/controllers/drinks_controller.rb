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
        #current_user to use when not in testing anymore
        drink = Drink.find_by(api_id:params[:api_id])
        drink = Drink.create(drinks_params) if drink.nil? 
        favorite = FavoriteDrink.create(user: params[:user_id], drink: drink) 
        render json: favorite
    end

    

    private
    def drinks_params
        params.require(:drink).permit(:name, :img_url, :ingredients, :steps, :api_id)
    end
end


