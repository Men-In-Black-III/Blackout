require 'rails_helper'

RSpec.describe Drink, type: :model do
  it "should validate if drink name exist" do
    drink = Drink.create name: ""
    expect(drink.errors[:name]).to_vnot be_empty
  end

  it "should validate if user_id exist" do
    favorite_drink = FavoriteDrink.create user_id:"", drink_id:10
    expect(favorite_drink.errors[:user_id]).to_not be_empty
  end

  it "should validate if drink_id exist" do
    favorite_drink = FavoriteDrink.create user_id:1, drink_id:""
    expect(favorite_drink.errors[:drink_id]).to_not be_empty
  end

  it "should be associated to users" do
    t = FavoriteDrink.reflect_on_association(:user)
    expect(t.macro).to eq(:belongs_to)
  end

  it "should be associated to drinks" do
    t = FavoriteDrink.reflect_on_association(:drink)
    expect(t.macro).to eq(:belongs_to)
  end
end
