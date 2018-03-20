import math

def is_prime:
  print "What number do you want to check? "
  num = gets.chomp
  check_num(num)
end

def check_num(num):
  if num == 1 
    print "Your number is not prime"
  elif num == 2
    print "Your number is prime"
  else
    x  = 0
    while x < math.sqrt(x)
      if num %% x == 0
        print "Your number is not prime"
      end
    end
  end
end

is_prime