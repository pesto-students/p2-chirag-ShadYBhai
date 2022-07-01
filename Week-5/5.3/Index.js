const arr1 = ['a', 'a'];
const arr2 = ['a', 'b'];

function containsDuplicates(array) {
  const result = array.some(element => {
    if (array.indexOf(element) !== array.lastIndexOf(element)) {
      return true;
    }

    return false;
  });

  return result;
}

console.log(containsDuplicates(arr1)); // 👉️ true

console.log(containsDuplicates(arr2)); // 👉️ false
