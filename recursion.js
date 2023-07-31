/** product: calculate the product of an array of numbers. */

const { cursorTo } = require("readline");

function product(nums, i = 0) {
  if(i === nums.length ) return 1;
  return nums[i] * product(nums, i + 1)
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0, longestSoFar=0) {
  if(i === words.length) return longestSoFar
  if(words[i].length > longestSoFar) longestSoFar = words[i].length;
  return longest(words, i+1, longestSoFar)
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0, result="") {
  if(i >= str.length) return result;
  result = result + str[i];
  return everyOther(str, i+=2, result)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i=0, curCompare=true) {
  if(str.length <= i/2 || !curCompare) return curCompare
  if(str[i] !== str[str.length - 1 - i]) curCompare=false
  return isPalindrome(str, i+1, curCompare)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0, loc=-1) {
  if(i === arr.length || loc !== -1) return loc;
  if(arr[i] === val) loc = i
  return findIndex(arr, val, i+1, loc)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i=0, rev='') {
  if(i === str.length) return rev;
  rev = rev + str[str.length - 1 - i]
  return revString(str, i + 1, rev)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, strs=[]) {
  let keys = Object.keys(obj)
  for(let key of keys){
    if(typeof obj[key] === "string") strs.push(obj[key])
    if(typeof obj[key] === "object" ) strs.push(...gatherStrings(obj[key]))
  }
  return strs;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left=0, right=arr.length-1) {
  let mid = Math.floor((left + right) / 2)

  if(arr[mid] === val) return mid
  if(mid === 0 || mid === arr.length - 1) return -1

  if(arr[mid] > val){
    right = mid - 1
  } else if(arr[mid] < val){
    left = mid + 1
  }
  return binarySearch(arr, val, left, right)
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
