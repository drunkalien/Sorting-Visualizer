function getInsertionSortAnimations(arr) {
  const animations = [];
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j + 1] < arr[j]) {
        const tmp = arr[j + 1];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
        animations.push([[...arr], i, j]);
      } else break;
    }
  }
  return animations;
}

export default getInsertionSortAnimations;
