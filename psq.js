//Beginner Friendly Questions
//js
//1.print hello world
console.log("hello world!");


//2.add two numbers using function
var n1;
var n2;
function sum(n1, n2) {
    return n1 + n2;
}
console.log(sum(3, 5));


//3.largest number among 3 numbers using function
function largestNum(a, b, c) {
    if (a > b && a > c) {
        console.log(a, "is the largest among all three numbers")
    } else if (b > c && b > a) {
        console.log(b, "is the largest among all three numbers")
    } else if (b == c && b == a) {
        console.log("all three numbers are equal")
    } else if ((a == b) && a > c) {
        console.log(a, b, "are equal and largest number")
    } else if ((a == c) && a > b) {
        console.log(a, c, "are equal and largest number")
    } else if ((c == b) && c > a) {
        console.log(c, b, "are equal and largest number")
    } else {
        console.log(c, "is the largest among all three numbers")
    }
}
largestNum(2, 8, 5);


//4.even odd check using function
function checkNum(N1) {
    if (N1 % 2 == 0) {
        console.log(N1, "is even number")
    } else {
        console.log(N1, "is odd number")
    }
}
checkNum(4);


//5. factorial using function
let fact = 1
function factorial(A1) {
    for (i = A1; i > 0; i--) {
        fact = i * fact
    }
    console.log(fact, "is the factorial of", A1)
}
factorial(5);


//6.reverse string using function
function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    console.log(newString)
}
reverseString("hello");


//7.Palindrome using function
let str = "madam";
A = str.split("")
// console.log(A)
rev = A.reverse()
// console.log(rev)
revstr = rev.join("")
// console.log(revstr)
function palindromecheck() {
    if (str == revstr) {
        console.log(str, "word is a palindrome")
    } else {
        console.log(str, "word is not a palindrome")
    }
}
palindromecheck();


//8. function that takes an array and returns the smallest number
function findMin(a) {
    let minimum = a[0];
    for (i = 0; i < a.length; i++) {
        if (a[i] <= minimum) {
            minimum = a[i]
        }
    } console.log(minimum)
}
findMin([3, 1, 4, 1, 5]);


//9.function that sorts an array of numbers in ascending order
function ascSort(b) {
    console.log(b.sort())
}
ascSort([3, 1, 4, 1, 5])

//10.function that checks if a string contains another substring
function containsSubstring(str1, str2) {
    return str1.includes(str2);
}
console.log(containsSubstring("Hello, world!", "world"));


//11.function that returns the sum of all numbers in an array
function sumArray(arr) {
    let sum_1 = 0;
    for (i = 0; i < arr.length; i++) {
        sum_1 += arr[i];
    }
    console.log(sum_1);
}
sumArray([1, 2, 3, 4, 5]);


//12.function that generates the first `n` Fibonacci numbers
function fibonacci(n) {
    let num1 = 0, num2 = 1;
    console.log(num1);
    console.log(num2);
    for (var i = 1; i < n; i = i + 1) {
        num3 = num1 + num2
        { console.log(num3) }
        num1 = num2;
        num2 = num3;
    }
}
fibonacci(5);


//13.function that checks if a number is prime
function isPrime(p) {
    var count = 0;
    for (i = 2; i < p; i++) {
        if (p % i == 0) {
            count = count + 1
        }
    }
    if (count > 0) {
        console.log(p, "is not prime")
    } else {
        console.log(p, "is prime")
    }
}
isPrime(7);


//14.function that counts the number of vowels in a given string
let count = 0;
function countVowels(word) {
    for (i = 0; i < word.length; i++) {
        if (word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' || word[i] === 'u' || word[i] === 'A' || word[i] === 'E' || word[i] === 'I' || word[i] === 'O' || word[i] === 'U') {
            // console.log(word[i],"is a vowel")
            count = count + 1
        }
    }
    console.log("there are", count, "vowels")
}
countVowels("hello");


//15.function that returns the index of a given element in an array. If the element is not found, return -1
function findIndex(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return i;
        }
    }
    return -1;
}
console.log(findIndex([1, 2, 3, 4, 5], 3));


//16.function that removes duplicate elements from an array      
function removeDuplicates(array_1) {
    let unique = [];
    for (i = 0; i < array_1.length; i++) {
        if (unique.indexOf(array_1[i]) === -1) {
            unique.push(array_1[i]);
        }
    }
    console.log(unique);
}
removeDuplicates([1, 2, 2, 3, 4, 4, 5]);

//17.function that returns an array of the common elements in two arrays
function findIntersection(array_5, array_6) {
    var commanarr = [];
    for (var i = 0; i < array_5.length; i++) {
        for (var j = 0; j < array_6.length; j++) {
            if (array_5[i] == array_6[j]) {
                commanarr.push(array_5[i]);
            }
        }
    }
    console.log(commanarr);
}
findIntersection([1, 2, 3], [2, 3, 4]);


//18.function that checks if two strings are anagrams of each other
function areAnagrams(string_2, string_3) {
    let str1_arr = Array.from(string_2).sort()
    let str2_arr = Array.from(string_3).sort()
    let count = true;
    for (i = 0; i < string_2.length; i++) {
        if (str1_arr[i] == str2_arr[i]) {
        }
        else { count = false }
    }
    console.log(count)
}
areAnagrams('listen', 'silent');


//19.function that capitalizes the first letter of each word in a string 
function capitalizeWords(string_1) {
    let str3 = string_1.split(" ")
    let temp_1 = ""
    for (i = 0; i < str3.length; i++) {
        temp_1 = temp_1 + (str3[i])[0].toUpperCase() + str3[i].slice(1) + " "
    }
    console.log(temp_1)
}
capitalizeWords('hello world');


//20.function that flattens a nested array (an array of arrays) into a single array
function flattenArray(array_4) {
    console.log(array_4.flat(2))
}
flattenArray([1, [2, 3], [4, [5, 6]]]);


//21.function that generates a random number between a given range
function randomNumber(min, max) {
    console.log(Math.floor(Math.random() * (max - min)) + min)
}
randomNumber(1, 10);


//22.function that checks if a given string is a valid email address
function isValidEmail(string_6) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(regex.test(string_6))
}
isValidEmail('test@example.com');


//23.function that converts a temperature from Celsius to Fahrenheit
function celtofahren(celsius) {
    let fahrenheit = celsius * (9 / 5) + 32;
    console.log(celsius, "celsius =", fahrenheit, "fahrenheit")
}
celtofahren(10);


//24.function that removes a specific element from an array
function removeElement(array_2, element) {
    array_2.splice(array_2.indexOf(3), 1)
    console.log(array_2);
}
removeElement([1, 2, 3, 4, 5], 3);


//25.function that returns the second largest number in an array
function secondLargest(array_3) {
    largest = array_3[0];
    for (let i = 1; i < array_3.length; i++) {
        if (array_3[i] > largest) {
            secondlargest = largest;
            largest = array_3[i];
        }
    }
    console.log(secondlargest)
}
secondLargest([1, 2, 3, 4, 5]);


//26.function that returns the longest word in a string
function longestWord(string_4) {
    var strsplit = string_4.split(' ');
    var longword = 0;
    for (var i = 0; i < strsplit.length; i++) {
        if (strsplit[i].length > longword) {
            longword = strsplit[i].length;
        }
    }
    console.log(longword)
}
longestWord('The quick brown fox jumped over the lazy dog');


//27.function that finds the missing number in a sequence from 1 to n
function findMissing(arr, N) {
    let i;
    let temp = new Array(N).fill(0);
    for (i = 0; i < N; i++) {
        temp[arr[i] - 1] = 1;
    }
    let ans = 0;
    for (i = 0; i <= N; i++) {
        if (temp[i] === 0)
            ans = i + 1;
    }
    console.log(ans);
}
let arr = [1, 2, 4, 5, 6];
let n = arr.length;
findMissing(arr, n);

//28.function that calculates the greatest common divisor (GCD) of two numbers

//29.function that calculates the least common multiple (LCM) of two numbers

//30.function that checks if a string has balanced parentheses
function isBalancedParentheses(str) {
    let stack = [];
    for (let char of str) {
        if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            if (stack.length === 0) {
                return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0;
}
console.log(isBalancedParentheses('()'));
// console.log(isBalancedParentheses("(a + b) * (c + d)")); 
// console.log(isBalancedParentheses("(a + b * (c + d)")); 
// console.log(isBalancedParentheses(")a + b("));   



//31.function that rotates an array by k steps
function rotateArray(arr, k) {
    k = k % arr.length;
    reverse(arr, 0, arr.length - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, arr.length - 1);
    return arr;
}
function reverse(arr, start, end) {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}
console.log(rotateArray([1, 2, 3, 4, 5], 2));




//STRING QUESTIONS
//32.function that reverses a given string
function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    console.log(newString)
}
reverseString("hello");


//33.function that checks if a given string is a palindrome
str = "racecar"
A = str.split("")
console.log(A)
rev = A.reverse()
console.log(rev)
revstr = rev.join("")
console.log(revstr)
function palindromechecker() {
    if (str == revstr) {
        console.log("yes it is a palindrome")
    } else {
        console.log("no, it is not a palindrome")
    }
}
palindromechecker()


//34.function that counts the number of vowels (`a, e, i, o, u`) in a given string
let string = 'JS'
function vovel(string) {
    let temp = '';
    let counter = 0;
    for (i = 0; i < string.length; i++) {
        temp = string[i].toLowerCase()
        if (temp === 'a' || temp === 'e' || temp === 'i' || temp === 'o' || temp === 'u') {
            counter = counter + 1
        }
    }
    console.log(counter)
}
vovel(string)


//35.function that finds the first non-repeated character in a string
function firstNonRepeatedCharacter(str) {
    let charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    return null;
}
console.log(firstNonRepeatedCharacter("swiss"));


//36.function that counts the number of words in a string. Assume words are separated by spaces



//37.function that checks if two strings are anagrams (contain the same characters in different orders).
function areAnagrams(string_2, string_3) {
    let str1_arr = Array.from(string_2).sort()
    let str2_arr = Array.from(string_3).sort()
    let count = true;
    for (i = 0; i < string_2.length; i++) {
        if (str1_arr[i] == str2_arr[i]) {
        }
        else { count = false }
    }
    console.log(count)
}
areAnagrams('listen', 'silent');



//38.function that replaces all spaces in a string with hyphens (`-`)
function printHyphen(string_7) {
    var lis = string_7.split(" ")
    string = lis.join("-");
    return string_7;
}
var string_7 = "Hello World";
document.write(printHyphen(string));


//39.function that converts a string to title case (capitalizes the first letter of each word)
function capitalizeWords(string_1) {
    let str3 = string_1.split(" ")
    let temp_1 = ""
    for (i = 0; i < str3.length; i++) {
        temp_1 = temp_1 + (str3[i])[0].toUpperCase() + str3[i].slice(1) + " "
    }
    console.log(temp_1)
}
capitalizeWords('hello world');



//40.function that checks if a string contains only numeric digits



//41.function that removes duplicate characters from a string
function removeDuplicateCharacters(str) {
    return Array.from(new Set(str)).join('');
}
console.log(removeDuplicateCharacters("programming"));


//42.function that finds the longest word in a string
function longestWord(string_4) {
    var strsplit = string_4.split(' ');
    var longword = '';
    for (var i = 0; i < strsplit.length; i++) {
        if (strsplit[i].length > longword.length) {
            longword = strsplit[i];
        }
    }
    console.log(longword);
}
longestWord('The quick brown fox jumped over the lazy dog');


//43.function that capitalizes the first letter of each word in a string
function capitalizeWords(string_1) {
    let str3 = string_1.split(" ")
    let temp_1 = ""
    for (i = 0; i < str3.length; i++) {
        temp_1 = temp_1 + (str3[i])[0].toUpperCase() + str3[i].slice(1) + " "
    }
    console.log(temp_1)
}
capitalizeWords('hello world');


//44.function that repeats a given string `n` times
function repeatString(str, n) {
    return str.repeat(n);
}
console.log(repeatString("abc", 3));


//45.function that checks if a string contains a given substring
function containsSubstring(str1, str2) {
    return str1.includes(str2);
}
console.log(containsSubstring("Hello, world!", "world"));
console.log(containsSubstring("hello world", "planet"));


//46.function that converts a string to an array of words
function stringToWords(string_5) {
    new_str = string_5.split(" ");
}
console.log(stringToWords("This is a test"));


//47.function that truncates a string to a specified length and adds "..." at the end
function truncateString(str, length) {
    if (str.length > length) {
        return str.slice(0, length) + '...';
    }
    return str;
}
console.log(truncateString("This is a long string", 10));



//48.function that checks if a string starts with a given substring
function startsWithSubstring(str, substring) {
    return str.startsWith(substring);
}
console.log(startsWithSubstring("Hello, world!", "Hello"));
console.log(startsWithSubstring("Hello, world!", "world"));


//49.function that checks if a string ends with a given substring
function endsWithSubstring(str, substring) {
    return str.endsWith(substring);
}
console.log(endsWithSubstring("Hello, world!", "world!"));
console.log(endsWithSubstring("Hello, world!", "Hello"));



//50.function that inserts a substring at a specific position in a string.
function insertSubstring(original, substring, position) {
    if (position < 0 || position > original.length) {
        throw new Error("Position is out of bounds.");
    }
    return original.slice(0, position) + substring + original.slice(position);
}
console.log(insertSubstring("Hello World!", "Beautiful ", 6));


//51.function that removes all instances of a substring from a string
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
function removeAllInstances(original, substring) {
    const escapedSubstring = escapeRegExp(substring);
    const regex = new RegExp(escapedSubstring, 'g');
    return original.replace(regex, '');
}
console.log(removeAllInstances("This is a test. This is only a test.", "test"));




//Array Questions
//52.function that returns the sum of all numbers in an array
function sumArray(array_7) {
    let sum_2 = 0;
    for (i = 0; i < array_7.length; i++) {
        sum_2 += array_7[i]
    }
    console.log(sum_2);
}
sumArray([1, 2, 3, 4, 5]);


//53.function that returns the largest number in an array
function findLargest(array_8) {
    let maximum = array_8[0];
    for (i = 0; i < array_8.length; i++) {
        if (array_8[i] >= maximum) {
            maximum = array_8[i]
        }
    }
    console.log(maximum)
}
findLargest([1, 5, 3, 9, 2]);


//54.function that returns the smallest number in an array
function findSmallest(array_9) {
    let minimum = array_9[0];
    for (i = 0; i < array_9.length; i++) {
        if (array_9[i] <= minimum) {
            minimum = array_9[i]
        }
    }
    console.log(minimum)
}
findSmallest([1, 5, 3, 9, 2]);



//55.function that sorts an array in ascending order
function sortArray(array_10) {
    console.log(array_10.sort())
}
sortArray([5, 2, 9, 1, 5, 6]);


// function sortArray(array_10) {
//     let temp;
//     for (i = 0; i < array_10.length; i++) {
//         if (array_10[i] > array_10[i + 1]) {
//             temp = array_10[i+1];
//             array_10[i+1] = array_10[i];
//             array_10[i]=temp;
//         }
//     }
//     console.log(array_10)
// }
// sortArray([5, 2, 9, 1, 5, 6]);



//56.function that sorts an array in descending order
function sortArrayDescending(array_11) {
    arr1 = array_11.sort();
    arr2 = arr1.reverse();
    console.log(arr2);
}
sortArrayDescending([5, 2, 9, 1, 5, 6]);


//57.function that reverses the elements of an array
function reverseArray(array_12) {
    let reversearr = [];
    for (i = array_12.length - 1; i >= 0; i--) {
        reversearr.push(array_12[i]);
    }
    console.log(reversearr)
}
reverseArray([1, 2, 3, 4, 5]);


//58.function that checks if an array contains a specific element
function containsElement(array_13, element_1) {
    for (i = 0; i < array_13.length; i++) {
        if (array_13[i] === element_1) {
            console.log('true');
        }
    }
}
containsElement([1, 2, 3, 4, 5], 3);


//59.function that returns the index of a specific element in an array. If the element is not found, return -1
function findIndex(array_14, element_2) {
    for (i = 0; i < array_14.length; i++) {
        if (array_14[i] === element_2) {
            console.log(array_14.indexOf(array_14[i]))
        } else {
            console.log(-1);
        }
    }
}
findIndex([1, 2, 3, 4, 5], 3);



//60.function that removes duplicate elements from an array
function removeDuplicates(array_15) {
    let arr3 = [];
    for (i = 0; i < array_15.length; i++) {
        if (!arr3.includes(array_15[i])) {
            arr3.push(array_15[i])
        }
    }
    console.log(arr3)
}
removeDuplicates([1, 2, 2, 3, 4, 4, 5]);


//61.function that merges two arrays into one
//type-1
function mergeArrays(arr4, arr5) {
    mergeResult = arr4.concat(arr5);
    console.log(mergeResult);
}
mergeArrays([1, 2, 3], [4, 5, 6]);

//type-2
function mergeArrays(arr4, arr5) {
    for (let i = 0; i < arr5.length; i++) {
        arr4.push(arr5[i]);
    }
    console.log(arr4);
}
mergeArrays([1, 2, 3], [4, 5, 6]);



//62.function that returns the intersection of two arrays
function findIntersection(array_16, array_17) {
    let newarr = [];
    for (i = 0; i < array_16.length; i++) {
        for (j = 0; j < array_17.length; j++) {
            if (array_16[i] == array_17[j]) {
                newarr.push(array_16[i])
            }
        }
    }
    console.log(newarr);
}
findIntersection([1, 2, 3], [2, 3, 4]);


//63.function that returns the union of two arrays
function findUnion(array_18, array_19) {
    let arr6 = [];
    for (let i = 0; i < array_18.length; i++) {
        if (!arr6.includes(array_18[i])) {
            arr6.push(array_18[i]);
        }
    }
    for (let i = 0; i < array_19.length; i++) {
        if (!arr6.includes(array_19[i])) {
            arr6.push(array_19[i]);
        }
    }
    console.log(arr6);
}
findUnion([1, 2, 3], [2, 3, 4]);


//64.function that checks if an array is sorted in ascending order
function isSorted(array_20){
    arr_copy=[...array_20]
    arr_sort=arr_copy.sort()
    if(JSON.stringify(arr_sort)===JSON.stringify(array_20)){
        // JSON.stringify() for comparison: This method converts the arrays to JSON strings so that we can compare the content of the arrays element by element.
        console.log("true")
    }else{
        console.log('false')
    }
}
isSorted([1, 2, 3, 4, 5]);


//65.function that returns the difference of two arrays (elements in the first array that are not in the second array)
function findDifference(array_21){
}
findDifference([1, 2, 3], [2, 3, 4]);
