class User < ActiveRecord::Base
	has_many :ratings
  
  def authenticate(password)
    self.password == password
  end
end