function insertionSortAnimations(arr) {
  // TODO fix new bug :)
  const animations = [];
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j];
      animations.push([[...arr], j, j + 1]);
    }
    arr[j + 1] = current;
  }
  return animations;
}

export default insertionSortAnimations;
