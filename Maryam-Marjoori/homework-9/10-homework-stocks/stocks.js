/*
  Create a `Stock` constructor that has the following attributes:
  * symbol - (a string) 
    // Every stock listed on a stock exchange has a symbol, which is usually between
    // one and four capital letters, such as V or AAPL.
  * shares - (a number) 
    // Stocks are sold in shares, which can be whole numbers or decimal amounts.
  * exchange - (a string equal to NYSE) 
    // Stocks are sold on stock exchanges, such as the New York Stock Exchange (NYSE) or the NASDAQ.
    // The NYSE is the largest in the U.S., so we are setting this as a default value for our constructor.

  And the following methods:
  * buyShares(number) - adds the number of shares purchased (a number) to the value of the shares property
  * sellShares(number) - subtracts the number of shares sold (a number) from the value of the shares property
  * calcValue(price) - multiplies the value of the shares property by the price (a number) and returns the result

  ## Goal

  Make sure to use the Stock prototype so that you're not creating multiple copies of the functions for your stocks.
  
  ## Testing

  Create a stock using the name "visa" and the values "V" for symbol and 100 for shares.
  Use the buyShares() method to buy 50 shares.
  Use the sellShares() method to sell 75 shares.
  Use the calcValue() method to calculate the value at a price of 50.35.
  Create a stock using the name "apple" and the values "AAPL" for symbol and 200 for shares. Specify
     the value "NASDAQ" for exchange. Check the values of the exchange property for apple and for visa
     and verify that the value for apple is the one you just set, while the value for visa remains "NYSE".
 
  ## Bonuses

  1. Ensure that the total number of shares is never less than zero.
  2. Ensure that calculated values are always rounded to the nearest cent.
*/

function Stock (symbol,shares){
    this.symbol = symbol,
    this.shares = shares,
    this.exchange = "NYSE"
}

Stock.prototype.buyShares = function(sharedPurchased){
      if (0 > sharedPurchased){
        console.log("You can't but negative number of shares.")
      }
      else {
        return "Total shares you have is equal to: " + (this.shares + sharedPurchased);
      }
    };
Stock.prototype.sellShares = function(sharedSold){
      if (sharedSold > this.shares){
        console.log( "You can't sale " + sharedSold + " shares becasue it's more than what you currently have.");
      }
      else {
        return "Your remaining shares are equal to: " + (this.shares - sharedSold); 
      }
    };
Stock.prototype.calcValue = function(currentPrice){
      return "The price is $" + Math.round(this.shares * currentPrice);
    };

var visa = new Stock("V",100);
var apple = new Stock("AAPL",200);
apple.exchange = "NASDAQ";