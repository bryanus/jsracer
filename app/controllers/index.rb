get '/' do

  erb :index
end


post '/login' do
  @one = Player.find_by_name(params[:one])
  @two = Player.find_by_name(params[:two])
  
  p @one.nil?
  p @two.nil?

  if @one.nil? || @two.nil?
    redirect '/'
  else
    session[:player_ids] = [@one.name, @two.name]
    redirect '/game'
  end
end

post '/signup' do

  @one = Player.new(:name => params[:one])
  @two = Player.new(:name => params[:two])
  
  unless @one.save && @two.save
    redirect '/'
  end

  session[:player_ids] = [@one.name, @two.name]
  redirect '/game'

end

get '/game' do
  if session[:player_ids] 
    @one = Player.find_by_name(session[:player_ids][0])
    @two = Player.find_by_name(session[:player_ids][1])
    erb :game
  else
    redirect '/'
  end
  erb :game
end

post '/game' do
  @one = Player.find_by_name(session[:player_ids][0])
  @two = Player.find_by_name(session[:player_ids][1])

  @game = Game.create()
  @game.players << @one
  @game.players << @two 
  
  redirect '/game'
end

get '/logout' do
  session.clear
  redirect '/'
end