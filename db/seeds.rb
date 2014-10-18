require 'bartender'


families = ["Berliner Weisse", "Lambic", "Belgian Gold Ale", "Belgian White", "Gueuze", "Tripel", "American Wheat", "Faro", "Saison", "Pale Ale", "American lite", "Munich Helles", "Helles Bock", "Weizenbier", "Fruit Beer", "Belgian Pale Ale", "American Pale Ale", "Ordinary Bitter", "Scottish Light 60/-", "English Mild", "Dry Stout", "Foreign Extra Stout", "German Pilsner", "American Standard", "Dortmunder", "Doppelbock", "Dunkelweizen", "Flanders Red ", "Belgian Dark Ale", "India Pale Ale", "Special Bitter", "Scottish Heavy 70/-", "American Brown", "Brown Porter ", "Sweet Stout", "Imperial Stout", "Bohemian Pilsner", "American Premium ", "Munich Dunkel", "Traditional Bock ", "Weizenbock", "Oud Bruin", "Dubbel", "American Amber Ale", "Extraspecial Bitter", "Scottish Export 80/-", "English Brown", "Robust Porter", "Oatmeal Stout", "Russian Imperial Stout", "American Pilsner", "American Dark", "Schwarzbier ", "Eisbock ", "Kolsch ", "Biere de Garde", "Oktoberfest", "Cream Ale", "Smoked Beer", "English Old(Strong) Ale", "Altbier ", "Vienna ", "Steam Beer", "Barleywine",
"Strong Scotch Ale"]

families.each do |family|
	Family.create(
		name: family,
		description: Faker::Lorem.paragraph(3)
		)
end

@beers = Bartender::Beer.all

13.times do
	@beers["beers"].each do |beer|
		Beer.create(
			name: beer["name"],
			description: beer["description"],
			abv: beer["abv"],
			ibu: [*5..100].sample,
			srm: [*6..14].sample,
			brewer: beer["brewery"]["name"],
			family_id: [*1..65].sample
		)
	end
end

User.create(
	email: "pablo@naps.com",
	password: "lol",
	first_name: "Pablo",
	last_name: "Lopez"
	)
User.create(
	email: "sean@naps.com",
	password: "lol",
	first_name: "Sean",
	last_name: "Ellis"
	)
User.create(
	email: "rob@naps.com",
	password: "lol",
	first_name: "Rob",
	last_name: "Yang"
	)
User.create(
	email: "mark@naps.com",
	password: ":(",
	first_name: "Mark",
	last_name: "McQuillen"
	)

3000.times do
	Rating.create(
		user_id: 				[*1..(User.all.length)].sample,
		score:      		[*1..5].sample,
		rateable_type: 	"Beer",
		rateable_id: 		[*1..(Beer.all.length)].sample
		)
end

1000.times do
	Rating.create(
		user_id: 				[*1..(User.all.length)].sample,
		score:      		[*1..5].sample,
		rateable_type: 	"Family",
		rateable_id: 		[*1..(Family.all.length)].sample
		)
end



















