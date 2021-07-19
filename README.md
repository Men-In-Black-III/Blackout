# README
#BLACKOUT
# Introduction
--------------
This app was degsined with the idea in mind that sometimes we go out to bars try cocktails and don't remember what the name of the cocktail was or sometimes we show up to a bar which has no specific menu. This app resolves both of those issues. We have a list of over 500 cocktails with instructions on how to make them. As well as if you create an account you can save all of the drinks you enjoyed the most to your favorites list its simple and easy to use.
# Tech Stack used
-----------------
 "react": "^17.0.2",
 "reactstrap": "^8.9.0"
 gem 'rails', '~> 6.1.4'
# Command Install APP
    $ git clone - to clone repo
    $ cd blackout
    $ yarn add
    $ bundle
    $ rails db:create
    $ rails db:migrate
    $ rails db:seed
# Test
example:
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
testing commands
$ bundle add rspec-rails
$ rails generate rspec:install
$ rspec favorite_drinks_spec.rb
# Contributers
Guillermo Garcia - Project Manager
Raymond Li - Tech Lead
Diego Hernandez- Design Lead