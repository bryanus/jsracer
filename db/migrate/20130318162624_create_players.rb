class CreatePlayers < ActiveRecord::Migration
  def change
    create_table :players do |t|
      t.string :name, :null => false, :unique => true
      t.integer :wins, :default => 0
      t.integer :losses, :default => 0
      t.timestamps
    end

  end
end
