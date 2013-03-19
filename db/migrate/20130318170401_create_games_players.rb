class CreateGamesPlayers < ActiveRecord::Migration
  def change
    create_table :games_players do |t|
      t.references :player, :null => false
      t.references :game, :null => false

     end 
    add_index :games_players, [:player_id, :game_id]
  end
end

