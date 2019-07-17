function maxProfit(prices) {
  var buy = -Number.MAX_VALUE;
  var cooldown = 0;

  return prices.reduce((sell, price) => {
    buy = Math.max(buy, cooldown - price);
    cooldown = Math.max(cooldown, sell);
    return Math.max(sell, buy + price);
  }, 0);
}
