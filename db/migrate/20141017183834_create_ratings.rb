class CreateRatings < ActiveRecord::Migration
  def change
  	create_table :ratings do |t|
  		t.references	:user
  		t.integer			:score
  		t.references	:rateable, polymorphic: true

  		t.timestamps
  	end
  end
end