def palindrome(str)
  str = str.gsub(' ','')
  while str.length > 1
    unless str.slice!(0) == str.slice!(-1)
      #puts false to check
      return false
    end
  end
  #puts true to verify
  true
end

palindrome("eye")
palindrome("eyelids")
palindrome("racecar")
palindrome("never odd or even")