require 'faker'

10.times do |player|
  Player.create(name: Faker::Name.first_name)
end

10.times do |game|
  Game.create()
end
