class Family < ActiveRecord::Base
  has_many :beers
  has_many :ratings, as: :rateable

  def get_avg
  	ratings = self.ratings.pluck(:score)
  	average = (ratings.reduce(:+).to_f / ratings.length.to_f).ceil
  end
end
