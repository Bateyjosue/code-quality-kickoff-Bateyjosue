/**
 *  TRY TO IMPROVE THE FOLLOWING FUNCTION.
 *  YOU CAN REPLACE THE CODE INSIDE THE FUNCTIONS, THE FUNCTION NAME, ETC.
 *  PLEASE DO NOT REMOVE `export default function`
 */

// FUNCTION 1
export default function countRs(str) {
<<<<<<< HEAD
  return [...str].filter((char) => char === 'R').length
=======
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "R") {
      count++;
    }
  }
  return count;
>>>>>>> b5fad9d (fix Merge)
}
