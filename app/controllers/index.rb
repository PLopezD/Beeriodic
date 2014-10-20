# # landing page 
get '/' do
# 	# beeriodic table
# 	# assuming session[:id] = user_id
# 	@user_info = User.find(session[:id])
erb :index
end

# ------ >> 

#user section
get '/users/:id' do
	#user profile page
	#link to update and delete pages 
		session[:id] = User.find(params[:id])
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

# post '/register' do
# 	#create user
# 	User.create(email: params[:email],password: params[:password],first_name: params[:first_name],last_name: params[:last_name])
# 	redirect '/users/:id'
# end


# patch '/users/:id' do
# 	#update user
# 	User.find(params[:id]).update(email: params[:email],password: params[:password],first_name: params[:first_name],last_name: params[:last_name])
# 	redirect '/users/:id'
# end

# delete '/users/:id' do
# 	#delete user
# 	User.find(params[:id]).destroy
# 	redirect '/'
# end
# # ----->>


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

































































































































































































get '/landing' do


fam_info = Family.find(params[:fam_id]).to_json
beer_info = Family.find(params[:fam_id]).beers.limit(5).to_json
# beeriodic table
# binding.pry

end






