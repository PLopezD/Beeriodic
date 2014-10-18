class CreateBeers < ActiveRecord::Migration
  def change
  	create_table :beers do |t|
  		t.string 			:name
  		t.text 				:description
  		t.float 			:abv
  		t.float 			:ibu
  		t.float 			:srm
  		t.string 			:brewer
  		t.references 	:family

  		t.timestamps
  	end
  end
end
