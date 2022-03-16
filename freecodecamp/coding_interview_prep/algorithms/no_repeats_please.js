function permAlone(str) {
  // Create a regex to match repeated consecutive characters.
  let regex = /(.)\1+/;

  // Split the string into an array of characters.
  const arr = str.split("");
  const permutations = [];
  let tmp;

  // console.log(arr);
  // console.log([0])
  // console.log(str.match(regex))
  // console.log(str.match(regex)[0])
  // console.log(str)

  // Return 0 if str contains same character.
  if (str.match(regex) !== null && str.match(regex)[0] === str) return 0;

  // console.log(str)

  // Function to swap variables' content.
  function swap(index1, index2) {
    tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
  }

  // Generate arrays of permutations using the algorithm.
  function generate(int) {
    console.log(int)
    if (int === 1) {
      // Make sure to join the characters as we create  the permutation arrays
      permutations.push(arr.join(""));
    } else {
      for (let i = 0; i != int; ++i) {
        generate(int - 1);
        swap(int % 2 ? 0 : i, int - 1);
      }
    }
  }

  generate(arr.length);

  // Filter the array of repeated permutations.
  const filtered = permutations.filter(function(string) {
    return !string.match(regex);
  });
  console.log(filtered)

  // console.log(filtered)

  // Return how many have no repetitions.
  return filtered.length;

}

permAlone('aaa');

let datas =  [2,3,45]

let test = (datas) => {
  for(let i = 0; i < datas.length; i++){
    console.log(datas[i])
  }
}

test(datas)



