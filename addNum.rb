def addNumber(sum, numLeft)
  while numLeft > 0
    puts "enter a number"
    num = gets.chomp.to_i
    sum += num
    numLeft -= 1
  end
  return sum
end

puts "#{addNumber(0, 3)}"
