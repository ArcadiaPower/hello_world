# We'll pass you an array of two numbers.
# Return the sum of those two numbers
# plus the sum of all the numbers between them.

def method(numbers)
  (numbers[0]..numbers[1]).to_a.reduce(:+)

  # sum = 0
  # (numbers[0]..numbers[1]).each do |num|
  #   sum += num
  # end
end