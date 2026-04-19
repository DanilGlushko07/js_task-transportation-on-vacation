/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  let buy = 40 * days;

  if (days <= 2) {
    return buy;
  }

  if (days >= 3 && days <= 6) {
    buy -= 20;

    return buy;
  }

  if (days === 7) {
    buy -= 50;

    return buy;
  }
}

module.exports = calculateRentalCost;
