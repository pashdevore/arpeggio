class CreateProfiles < ActiveRecord::Migration
  def change
    create_table :profiles do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :gravatar_url
      t.string :city
      t.string :state
      t.string :country

      t.timestamps null: false
    end
  end
end
