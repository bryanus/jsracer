helpers do 
  def authenticate(name) # authenticates user on login
      if (@name = User.find_by_name(name)) == nil
        redirect '/'
      elsif
        @user.password == password
        give_token(@user)
        session_user_id(@user)
      else
        redirect '/login'
      end
  end

end  