class CreateLibraries < ActiveRecord::Migration[7.0]
  def change
    create_table :libraries do |t|
      t.string :name
      t.string :address
      t.string :telephone
      t.references :County, null: false, foreign_key: true

      t.timestamps
    end
  end
end
