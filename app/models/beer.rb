class Beer < ActiveRecord::Base
  belongs_to :family
  belongs_to :rateable, polymorphic: true
  has_many :ratings, as: :rateable
end
