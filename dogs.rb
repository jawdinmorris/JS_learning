class Dog
  attr_accessor :name
  def initialize name
    self.name = name
  end
  def speak
    puts "Hello, my name is #{self.name}"
  end
end

z = Dog.new("Hello")
z.speak
