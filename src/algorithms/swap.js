function swap(arr, el1, el2) {
  const tmp = arr[el2];
  el2 = el1;
  el1 = tmp;
}

export default swap;
