import math

def is_prime(end_num):
  for x in range(0, end_num):
    check_num(x)

def check_num(num):
  if num == 1:
    print("{} is not prime".format(num))
  elif num == 2:
    print("{} is prime".format(num))
  else:
    for x in range(2, num):
      if num % x == 0:
       # print("{} is not prime".format(num))
        break
      elif x == num - 1:
        print("{} is prime".format(num))

is_prime(100)