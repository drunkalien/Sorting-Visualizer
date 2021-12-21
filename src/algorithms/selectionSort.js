function selectionSortAnimations(arr) {
  const animations = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        const tmp = arr[j];
        arr[j] = arr[i];
        arr[i] = tmp;
        animations.push([[...arr], i, j]);
      }
    }
  }
  return animations;
}

export default selectionSortAnimations;
