users = [
  {
    email: "me@gmail.com",
    password:"1234567",
  },
  {
    email: "you@gmail.com",
    password:"1234567",
  },
  {
    email: "us@gmail.com",
    password:"1234567",
  }
]

drinks = [{
  name:"155 Belmont", 
  img_url: "peanut butter jelly time",
  ingredients: "ice and chocolate",
  steps: "one two three",
  api_id: "alcohol"
},{
  name:"Chevy something", 
  img_url: "big truck",
  ingredients: "salt and sugar",
  steps: "three two one",
  api_id: "Raymond"
},{
  name:"the Guillermo", 
  img_url: "dirty man",
  ingredients: "lots of alcohol",
  steps: "only one",
  api_id: "1234"
}]



  

  favorite_drinks = [
    {
      user_id: 2,
      drink_id:2,
    },
    {
      user_id:3,
      drink_id:3,
    },
    {
      user_id:2,
      drink_id:3,
    }
  ]


favorite_drinks.each do |attribute|
    FavoriteDrink.create attribute
    puts "creating #{attribute}"
  end

drinks.each do |attribute|
    Drink.create attribute
    puts "creating #{attribute}"
  end

users.each do |attribute|
    User.create attribute
    puts "creating #{attribute}"
  end