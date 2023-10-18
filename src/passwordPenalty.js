
/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = "") {
  if (typeof password !== "string") password = String(password);
  if (password == 'null') return 0

  return matches.reduce((acc, curr) => curr.length >= 3 ? acc + 2 : acc + 1)
}

