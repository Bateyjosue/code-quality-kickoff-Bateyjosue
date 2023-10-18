/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = "") {
  if (typeof password !== "string") password = String(password);
  if(password == 'null') return 0
  
  let regexPattern = /(.)\1+/g
  let penalty = 0;
  let matches = password.match(regexPattern);
    matches?.forEach(match => {
      penalty += match.length >= 3? 2: 1;
    })
  return penalty;
}
