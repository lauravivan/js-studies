/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  //the freelancer works 8 hours a day

  const ratePerDay = +ratePerHour * 8;
  return ratePerDay;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  const ratePerDay = dayRate(ratePerHour);

  const numberOfDays = budget / ratePerDay;

  //The result must be rounded down to the nearest whole number.
  return Math.floor(numberOfDays);
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const ratePerDay = dayRate(ratePerHour);

  //22 dias equivalem ao mês inteiro

  const fullMonth = 22;

  const ratePerMonthWithoutDiscount = ratePerDay * fullMonth;

  const ratePerMonthWithDiscount = discount * ratePerMonthWithoutDiscount;

  const totalRateWithDiscount =
    ratePerMonthWithoutDiscount - ratePerMonthWithDiscount;

  const billableDays = Math.floor(numDays / fullMonth);

  const remainingDays = numDays - billableDays * fullMonth;

  const totalBillableDays = totalRateWithDiscount * billableDays;

  const totalRemainingDays = ratePerDay * remainingDays;

  return Math.ceil(totalBillableDays + totalRemainingDays);
}
