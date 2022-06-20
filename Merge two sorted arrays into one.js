function mergeArrays(arr1, arr2) {
  if (arr1.length == 0 && arr2.length == 0) {
    return [];
  } else {
     return Array.from(new Set(arr1.concat(arr2))).sort((a,b) => a - b);   
    }
}
