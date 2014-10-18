class Family < ActiveRecord::Base
  has_many :beers
  has_many :ratings, as: :rateable
end
