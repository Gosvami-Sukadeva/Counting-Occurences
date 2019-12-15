function dispArr(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i] + "");
    if (i % 10 == 9) {
      console.log("\n");
    }

    if (i % 10 != 0) {
      console.log("\n");
    }
  }
}

function binSearch(arr, data) {
  var upperBound = arr.length - 1;
  var lowerBond = 0;
  while (lowerBond <= upperBound) {
    var mid = Math.floor((upperBound + lowerBond) / 2);
    if (arr[mid] < data) {
      lowerBond = mid + 1;
    } else if (arr[mid] > data) {
      upperBound = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
}

var nums = [];
for (var i = 0; i < 100; i++) {
  nums[i] = Math.floor(Math.random() * 101);
}

dispArr(nums);

function count(arr, data) {
  var count = 0;
  var position = binSearch(arr, data);
  if (position > -1) {
    ++count;
    for (var i = position - 1; i > 0; --i) {
      if (arr[i] == data) {
        ++count;
      } else {
        break;
      }
    }
    for (var i = position + 1; i < arr.length; i++) {
      if (arr[i] == data) {
        ++count;
      } else {
        break;
      }
    }
  }

  return count;
}
var nums1 = [7, 8, 9, 10, 11, 11, 12, 13];
var val = 9;
var retVal = count(nums1, val);
if (retVal >= 0) {
  console.log("Found " + retVal + " of the number " + val);
} else {
  console.log("Element is not found in array");
}
