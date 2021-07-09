

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