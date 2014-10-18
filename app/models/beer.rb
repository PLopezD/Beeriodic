class Beer < ActiveRecord::Base
  belongs_to :family
  has_many :ratings, as: :rateable
end
