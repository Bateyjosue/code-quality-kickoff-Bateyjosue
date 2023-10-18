export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */
export default function isValidPassword(password = "") {
 
  if (typeof password !== "string") password = String(password);

  /*
    pattern to check the length of the password,
    this regular expression requires that the string starts with a word character, 
    contains at least one lowercase letter, 
    at least one uppercase letter, 
    and at least one letter (regardless of case)
  */
  const re = new RegExp('^(?=.*\w)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{10,10}$', 'mg')
  const setOfPassword = new Set([...password]);
  
  if (!re.test(password)) return false
  if(forbiddenPasswords.includes(password)) return false
  if(setOfPassword.size < 4) return false
  return true
}
