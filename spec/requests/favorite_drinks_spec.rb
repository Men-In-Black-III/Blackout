require 'rails_helper'

RSpec.describe "FavoriteDrinks", type: :request do
  describe "/destroy" do
    it "should delete a drink" do
    # user = User.create(email:"testing@gmail.com", password:"password")
    # drink = Drink.create(name:"test")  
    # favorite_drink = FavoriteDrink.create(user_id:user.id, drink_id:drink.id)

    favorite_drink_params = {
      favorite_drink:{
        user_id:1,
        drink_id:2
      } 
    }
    post `/drinks`, params: favorite_drink_params
    drink = FavoriteDrink.first
    delete "/favorite_drinks/#{drink.id}"
    expect(response).to have_http_status(200)
    drinks = Drink.all
    expect(drinks).to be_empty
  end 
  end
end
