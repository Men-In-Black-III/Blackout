require 'rails_helper'


RSpec.describe "Drinks", type: :request do
  include Devise::Test::IntegrationHelpers
  describe "GET /index" do
    it "get a list of all the users favorite drinks" do
    user = User.create! email:"testing3@gmail.com", password:"password"
    
    
    sign_in user

    drink = Drink.create name:"test", ingredients:"vodka and soda", steps:"pour vodka and soda", api_id:"dssadsada"  
    favorite_drink = FavoriteDrink.create(user_id:user.id, drink_id:drink.id)
    

    params = {
        user_id:user.id
    }
  
    get '/drinks', params:params 
    
    drinks = JSON.parse(response.body)
    expect(response).to have_http_status(200)
    expect(drinks.length).to eq 1
    first_drink = drinks[0]
    expect(first_drink["name"]).to eq "test"
    expect(first_drink["ingredients"]).to eq "vodka and soda"
    expect(first_drink["steps"]).to eq "pour vodka and soda"
    expect(first_drink["api_id"]).to eq "dssadsada"
    end
  end
end
