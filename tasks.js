/////////Leet code tasks
/////////////////////////////////////////////////////////
// 1 -  Two Sum
let nums = [3, 3]
let target = 6;

var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j]
      }
    }
  }
  return null;
};

console.log(twoSum(nums, target));


/////////////////////////////////////////////////////////
// 2 -  addTwoNumbers
let l1 = [9, 9, 9, 9, 9, 9, 9];
let l2 = [9, 9, 9, 9];

var addTwoNumbers = function (l1, l2) {
  let res = [];
  let carry = 0;
  let index = 0

  while (l1[index] != undefined || l2[index] != undefined) {
    if (l1[index] == undefined) {
      l1[index] = 0
    } else if (l2[index] == undefined) {
      l2[index] = 0
    }
    res.push((l1[index] + l2[index] + carry) % 10)
    carry = Math.floor((l1[index] + l2[index] + carry) / 10)
    index++
  }
  if (carry != 0) {
    res.push(carry)
  }

  return res;
};

console.log(addTwoNumbers(l1, l2));


/////////////////////////////////////////////////////////
// 3 -  isPalindrome
var isPalindrome = function(x) {
    x = String(x).split('');
    if(x.join('') == x.reverse().join('')){
        return true
    } else {
        return false
    }
};

console.log(isPalindrome('121'));


/////////////////////////////////////////////////////////
// 4 - romanToInt
// M CM XC IV
var romanToInt = function(s) {
  const romanic = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  s = s.split('')
  let res = 0;

  for (let i = 0; i < s.length; i++) {
    if (romanic[s[i]] >= romanic[s[i+1]] || i == s.length - 1) {
      res += romanic[s[i]]
    } else if (romanic[s[i]] < romanic[s[i+1]]) {
      res += romanic[s[i+1]] - romanic[s[i]]
      i++
    } else {
      return false
    }
  }

  return res;
};

console.log(romanToInt('III'))


/////////////////////////////////////////////////////////
// 5 - longestCommonPrefix
var longestCommonPrefix = function(strs) {
  let res = ""
  let example = strs[0]
  for (let i = 0; i < example.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] != example[i]) {
        return res;
      }
    }
    res += example[i];
  }

  return res;
};

strs = ["flower","flow","flight"]
console.log(longestCommonPrefix(strs));


/////////////////////////////////////////////////////////
// 6 - isValid
var isValid = function(s) {
  const stack = [];
  const mapping = {
    ')': '(',
    '}': '{',
    ']': '['
  };
  for (let i = 0; i < s.length; i++) {
    if (mapping[s[i]]) {
      let lastElement = stack.pop()

      if (mapping[s[i]] !== lastElement) {
        return false
      }
    } else {
      stack.push(s[i])
    }
  }

  return stack.length === 0;
};

console.log(isValid("()"));         // Вывод: true
console.log(isValid("({[]})"));     // Вывод: true
console.log(isValid("(]"));         // Вывод: false


/////////////////////////////////////////////////////////
// 7 - mergeTwoLists //WRONG!
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

var mergeTwoLists = function(list1, list2) {
  const dummy = new ListNode();
  let current = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
        current.next = list2;
        list2 = list2.next;
    }

    current = current.next;
  }

  if (list1) {
    current.next = list1;
  } else {
    current.next = list2;
  }

  return dummy.next;
}


let list1 = [1,2,4];
let list2 = [1,3,4]

console.log(mergeTwoLists(list1, list2));


/////////////////////////////////////////////////////////
// 8 - removeDuplicates
var removeDuplicates = function(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let uniqueCount = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[uniqueCount] = nums[i];
      uniqueCount++;
    }
  }

  return uniqueCount;
};

var removeDuplicates = function(nums) {
  nums = [ ...new Set(nums) ].sort()

  console.log(nums);
  return nums.length
};

let numbers = [1,1,2]
console.log(removeDuplicates(numbers));


/////////////////////////////////////////////////////////
// 9 - removeDuplicates
var removeElement = function(nums, val) {
  if (nums.length === 0) {
    return false
  }

  let i = 0

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j]
      i++
    }
  }

  return i
};

let numArr = [0,1,2,2,3,0,4,2];
let val = 2

console.log(removeElement(numArr, val));


/////////////////////////////////////////////////////////
// 10 - strStr
var strStr = function(haystack, needle) {
  return haystack.indexOf(needle)
};

let haystack = "sadbutsad";
let needle = "sad"

console.log(strStr(haystack, needle));


/////////////////////////////////////////////////////////
// 11 - lengthOfLastWord
var lengthOfLastWord = function(s) {
  let arr = s.trim().split(' ')
  return arr[arr.length - 1].length
};
let someString = "   fly me   to   the moon  "
console.log(lengthOfLastWord(someString));


/////////////////////////////////////////////////////////
// 12 - plusOne
var plusOne = function(digits) {
  let num = 1
  for (let i = digits.length - 1; i >= 0; i--) {
    let tmp = digits[i]
    digits[i] = (digits[i] + num) % 10
    num = (tmp + num) / 10
    if (num < 1 ) {
      num = 0
      break;
    }
  }
  if (Math.floor(num) > 0) {
    digits.unshift(num)
  }

  return digits
};

digits = [0]
console.log(plusOne(digits));


/////////////////////////////////////////////////////////
// 13 - intToRoman
var intToRoman = function(num) {
  if (num <= 0) {
    return false
  }

  const romanic = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  }

  let res = ''

  for (const char in romanic) {
    const value = romanic[char];
    while(value <= num) {
      res += char;
      num -= value;
    }
  }

  return res
};

console.log(intToRoman(1994));


/////////////////////////////////////////////////////////
// 14 - lengthOfLongestSubstring
var lengthOfLongestSubstring = function(s) {
  if (s.length === 0) {
    return 0
  }

  let res = 0;
  let left = 0;
  let right = 0;
  let tmp = ''

  while (right <= s.length) {
    if (!tmp.includes(s[right])) {
      tmp += s[right++]
      if (right == s.length) {
        res = tmp.length > res ? tmp.length : res
      }
    } else if (tmp.includes(s[right])) {
      res = tmp.length > res ? tmp.length : res
      left = tmp.indexOf(s[right]) + left + 1
      tmp = ''
      right = left
    }
  }

  return res
}

let s = "1234567891";
console.log(lengthOfLongestSubstring(s));


/////////////////////////////////////////////////////////
// 15 - longestPalindrome
var longestPalindrome = function(s) {
  if ( s.length > 2) return s

  let start = 0
  let end = 0

  for (let i = 0; i < s.length; i++) {
    let len1 = expander(s, i, i);
    let len2 = expander(s, i, i + 1);
    let len = Math.max(len1, len2)

    if (len > end - start) {
      start = Math.ceil(i - (len - 1)/2);
      end = Math.floor(i + (len / 2));
    }
  }

  return s.substring(start, end + 1)
};

function expander(s, left, right) {
  while (left >= 0 && right < s.length && s[left] == s[right]) {
    left--
    right++
  }

  return right - left - 1
}