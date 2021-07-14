class Drink < ApplicationRecord
    validates :name, presence:true
    has_many :favorite_drinks
    has_many :users, through: :favorite_drinks
end
