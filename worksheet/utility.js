/**
 * The subtract function is complete and ready for use.
 */
export function subtract(a, b) {
  return a - b;
}

/**
 * To make the add function available for import to other
 * programs it must be exported, so prepend the word
 * "export" to the function definition (as seen in the
 * subtract example above)
 */
export function add(a, b) {
  return a + b;
}

export function compare(a, b){
  if(a.length === b.length){
    for(let i = 0; i < a.length; i++){
      if (a[i] != b[i]){
        return false;
      }
    }
    return true;
  }
  return false;
  
}

export function largest(arr){
  if(Array.isArray(arr) && arr.length > 0){
    return Math.max(...arr);
  }
  return null;
}

export function zeroest(arr){
  let closest;
  arr.forEach(num => {
    if (closest != undefined){
      if(closest > Math.sqrt(num*num)){
        closest = num;
      }
    } else {
      closest = Math.sqrt(num*num);
    }
  });
  return closest;
}
