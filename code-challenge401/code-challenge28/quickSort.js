function quickSort(arr, left, right) {
  if (left < right) {
    let position = partition(arr, left, right);
    quickSort(arr, left, position - 1);
    quickSort(arr, position + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {
  let pivot = arr[right];
  console.log(pivot, "privot");
  let low = left - 1;
  console.log(low, "low");

  for (let i = left; i < right; i++) {
    console.log("==============================");
    if (arr[i] <= pivot) {
      low += 1;
      console.log(arr[i], i);
      console.log(pivot, i, "prwithi");
      console.log(low, i, "lowi");
      swap(arr, i, low);
      console.log("==============================loop");
    }
  }
  swap(arr, right, low + 1);
  return low + 1;
}
function swap(arr, i, low) {
  let temp;
  temp = arr[i];
  console.log(temp, "temp");
  arr[i] = arr[low];
  arr[low] = temp;
}

console.log(quickSort([8, 4, 23, 42, 16, 15], 0, 5));
module.exports = quickSort;
