function getInsertionSortAnimations(arr) {
  const animations = [];
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j + 1] < arr[j]) {
        animations.push([[...arr], i, j]);
      } else break;
    }
  }
  return animations;
}

export default getInsertionSortAnimations;
