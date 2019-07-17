### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby

class CardGame


  def checkforAce(card) #method naming should have underscores between words in ruby and have self. before checkForAce
    if card.value = 1 # double == operator should be used
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2) # def is used to define a function not dif and missing comma between the arguments and have self. before highest_card
  if card1.value > card2.value
    return card #card has not been defined anywhere should be card1
  else
    return card2
  end
end
end # this will end the class so any method after wont work

def self.cards_total(cards)
  total # should be set = 0
  for card in cards
    total += card.value
    return "You have a total of" + total #should be after the loop not inside the loop as this will exit the method after the first card and either add a .to_s to the total or use string interpolation so it is all within a string instead of trying to coerce an int into a string.
  end
end
#move end from line 25 to here to end the class
```
