require('minitest/autorun')
require('minitest/rg')
require_relative('../card_game.rb')
require_relative('../card.rb')

class CardGameTest < MiniTest::Test

def setup
  @card1 = Card.new('spades', 1)
  @card2 = Card.new('hearts', 9)
  @cards = [@card1, @card2]
end

def test_check_for_Ace__true
  assert(CardGame.check_for_Ace(@card1))
end

def test_highest_card
  assert_equal(@card2,CardGame.highest_card(@card1, @card2))
end

end
