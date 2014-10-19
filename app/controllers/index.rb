# # landing page 
get '/' do
#   # beeriodic table
#   # assuming session[:id] = user_id
#   @user_info = User.find(session[:id])
  if session[:user_id] != nil
    @user_id = session[:user_id]
    @user = User.find(@user_id)
  end
erb :index
end

# FOR TESTING ONLY
get '/session-viewer' do
  session.inspect
  # User.find_by(username: params[:username]).inspect
end

# ------ >> 
#user section

# CREATE USER ----------------------------------
get '/users/new' do
	#create user
	erb :user_create
end

post '/users' do
  user = User.create(email: params[:email],password: params[:password],first_name: params[:first_name],last_name: params[:last_name])
  session[:user_id] = user.id
  redirect "/"
end

# LOGIN ----------------------------------

get '/login' do
  erb :user_login
end


post '/login' do
  user = User.find_by(email: params[:email])
  if user.authenticate(params[:password])
    session[:user_id] = user.id
    redirect '/'
  else
    erb :user_login
  end
end

# LOGOUT ----------------------------------

get '/logout' do
  session.delete(:user_id)
  redirect '/'
end


# USER PROFILE ----------------------------------

get '/users/:id' do
  #user profile page
  #link to update and delete pages 
    # session[:user_id] = User.find(3).id
    @user_info = User.find(params[:id])


    # User's rated beers
    @ratings_for_beers = @user_info.ratings.where("rateable_type = ?", "Beer")

    @beers_rated = {}

    @ratings_for_beers.each do |rating|
      @beers_rated.store(Beer.find(rating.rateable_id).name, rating.score)
    end

    @beers_rated = @beers_rated.sort_by { |beer, score| beer }

    # User's rated families
    @ratings_for_families = @user_info.ratings.where("rateable_type = ?", "Family")

    @families_rated = {}

    @ratings_for_families.each do |rating|
      @families_rated.store(Family.find(rating.rateable_id).name, rating.score)
    end

    @families_rated = @families_rated.sort_by { |family, score| family }


  erb :user_profile 
end

# EDIT USER PROFILE ----------------------------------

get '/users/:id/edit' do
  @user_info = User.find(params[:id])
  erb :user_profile_edit
end

patch '/users/:id' do
	#update user
	User.find(params[:id]).update(email: params[:email], password: params[:password], first_name: params[:first_name],last_name: params[:last_name])

  user_id = params[:id]

	redirect "/users/#{user_id}"
end

# EDIT USER PROFILE ----------------------------------

delete '/users/:id' do
	#delete user
	User.find(params[:id]).destroy
  session.delete(:user_id)
	redirect '/'
end
# ----->>


# #families section 
get '/families/:id' do
 # individual family profile page
 # loop with users that have rated beer
	@family = Family.find(params[:id])
	erb :family_profile
end

# post '/families/:id/rating' do
# 	#ajax post 
# 	#success("Thanks for your input!")
# 	# => no redirect
# end

# # ----->>

# #beers section

# get '/beers' do
# 	#show all beers
# 	@beers = Beer.all
# 	erb :beer_profile
# end



get '/beers/:id' do
	# individual beer profile page
	# includes submit rate link - post 'beer/:id/rating' 
	# loop with users that have rated beer
	# show the family a beer belongs to
	# show beer info
	@beer = Beer.find(params[:id])
 	erb :beer_profile
end

# post '/beers/:id/rating' do
# 	#ajax post 
# 	#success("Thanks for your input!")
# 	# => no redirect
# end

post '/beers/:id/rating' do
    type = params[:type].capitalize.chop
    Rating.create(
        user_id: session[:user_id],
        score: params[:form],
        rateable_id: params[:type_id],
        rateable_type: type
        )
# Rating.create(user_id: 1, score: 5, rateable_id: 3, rateable_type: "Beer")
end

post '/families/:id/rating' do
    type = params[:type].capitalize.chop
    Rating.create(
        user_id: session[:user_id],
        score: params[:form],
        rateable_id: params[:type_id],
        rateable_type: type
        )
# Rating.create(user_id: 1, score: 5, rateable_id: 3, rateable_type: "Beer")
end
