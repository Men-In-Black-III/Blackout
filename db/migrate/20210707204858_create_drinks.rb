class CreateDrinks < ActiveRecord::Migration[6.1]
  def change
    create_table :drinks do |t|
      t.string :name
      t.string :img_url
      t.string :ingredients
      t.string :steps
      t.string :api_id

      t.timestamps
    end
  end
end
