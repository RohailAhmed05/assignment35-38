//************************* Chapter 35 to 38***********************
//             Q#1
// function displayCurrentDateTime() {
//     var currentDateTime = new Date();
//     var options = {
//         weekday: 'short',
//         year: 'numeric',
//         month: 'short',
//         day: 'numeric',
//         hour: 'numeric',
//         minute: 'numeric',
//         second: 'numeric',
//         timeZoneName: 'short',
//     };
//     var formattedDateTime = currentDateTime.toLocaleString('en-US', options);
//     document.write(formattedDateTime);
// }

// displayCurrentDateTime();
//              Q#2
// function greetUser() {
//     var firstName = prompt('Enter your first name:');
//     var lastName = prompt('Enter your last name:');

//     var fullName = firstName + ' ' + lastName;
//     var greeting = 'Welcome, ' + fullName + '!';
//     return greeting;
// }

// var userGreeting = greetUser();
// document.write(userGreeting);
//              Q#3
// function sum(a,b) {
//    return a + b;
// }

// var number1 = parseFloat(prompt('Enter the first number:'));
// var number2 = parseFloat(prompt('Enter the second number:'));

// if (!isNaN(number1) && !isNaN(number2)) {
//     var result = sum(number1, number2);
//     document.write('The sum is: ' + result);
// } else {
//     document.write('Please enter valid numbers.');
// }
//           Q#4
// function calculate(num1, num2, operator) {
//     var result;

//     if (operator === '+') {
//         result = num1 + num2;
//     } else if (operator === '-') {
//         result = num1 - num2;
//     } else if (operator === '*') {
//         result = num1 * num2;
//     } else if (operator === '/') {
//         if (num2 !== 0) {
//             result = num1 / num2;
//         } else {
//             return 'Error: Division by zero';
//         }
//     } else {
//         return 'Error: Invalid operator';
//     }

//     return 'Result: ' + result;
// }

// var num1 = parseFloat(prompt('Enter the first number:'));
// var operator = prompt('Enter the operator (+, -, *, /):');
// var num2 = parseFloat(prompt('Enter the second number:'));

// var resultMessage = calculate(num1, num2, operator);
// document.write(resultMessage);
//          Q#5
// function squareUserInput() {
//     var userNumber = parseFloat(prompt('Enter a number:'));
//     var result = userNumber * userNumber;
//     return 'The square of ' + userNumber + ' is: ' + result;
// }

// var resultMessage = squareUserInput();
// document.write(resultMessage);
//         Q#6
// function computeFactorial() {
//     var number = parseInt(prompt('Enter a number:'));
//     var factorial = 1;

//     if (number === 0 || number === 1) {
//         document.write('The factorial of ' + number + ' is: 1');
//         return;
//     }

//     for (var i = 2; i <= number; i++) {
//         factorial *= i;
//     }

//     document.write('The factorial of ' + number + ' is: ' + factorial);
// }

// computeFactorial();
//         Q#7
// function displayCounting(start, end) {
//     if (start <= end) {
//         for (var i = start; i <= end; i++) {
//             document.write(i + '<br>');
//         }
//     } else {
//         document.write('Start number should be less than or equal to the end number.');
//     }
// }

// var startNumber = parseInt(prompt('Enter the start number:'));
// var endNumber = parseInt(prompt('Enter the end number:'));

// displayCounting(startNumber, endNumber);
//        Q#8
// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(number) {
//         return number * number;
//     }

//     function calculateHypotenuseSquared() {
//         var baseSquared = calculateSquare(base);
//         var perpendicularSquared = calculateSquare(perpendicular);
//         return baseSquared + perpendicularSquared;
//     }

//     var hypotenuseSquared = calculateHypotenuseSquared();
//     return Math.sqrt(hypotenuseSquared);
// }

// var base = parseFloat(prompt('Enter the base:'));
// var perpendicular = parseFloat(prompt('Enter the perpendicular:'));

// if (!isNaN(base) && !isNaN(perpendicular)) {
//     var result = calculateHypotenuse(base, perpendicular);
//     document.write('H^2 = B^2 + P^2: ' + result);
// } else {
//     document.write('Invalid input. Please enter valid numbers for the base and perpendicular.');
// }
//        Q#9
// function calculateRectangleArea(width, height) {
//     return width * height;
// }

// // Example with arguments as values:
// var area1 = calculateRectangleArea(5, 10);
// document.write('Area (Arguments as values):', area1,"<br>");

// // Example with arguments as variables and user input:
// var rectWidth = parseFloat(prompt('Enter the width:'));
// var rectHeight = parseFloat(prompt('Enter the height:'));
// var area2 = calculateRectangleArea(rectWidth, rectHeight);
// document.write('Area (Arguments as variables with user input):', area2);
//      Q#10
// function isPalindrome(str) {
//     // Remove spaces and convert to lowercase for accurate comparison
//     str = str.replace(/ /g, "").toLowerCase();
    
//     // Reverse the string
//     var reversedStr = str.split("").reverse().join("");
    
//     return str === reversedStr;
// }

// var inputString = prompt('Enter a string:');

// if (isPalindrome(inputString)) {
//     document.write(inputString + ' is a palindrome.');
// } else {
//     document.write(inputString + ' is not a palindrome.');
// }
//       Q#11
// function capitalizeFirstLetterOfEachWord(inputString) {
//     var words = inputString.split(' ');
//     var capitalizedWords = words.map(function(word) {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     });
//     return capitalizedWords.join(' ');
// }

// var inputString = prompt('Enter a string:');
// var result = capitalizeFirstLetterOfEachWord(inputString);
// document.write('Capitalized String: ' + result);
//       Q#12
// function findLongestWord(inputString) {
//     var words = inputString.split(' ');
//     var longestWord = '';

//     for (var i = 0; i < words.length; i++) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
//     }

//     return longestWord;
// }

// var inputString = prompt('Enter a string:');
// var result = findLongestWord(inputString);
// document.write('Longest Word: ' + result);
//     Q#13
// function countOccurrences(inputString, letter) {
//     var count = 0;
//     for (var i = 0; i < inputString.length; i++) {
//         if (inputString[i] === letter) {
//             count++;
//         }
//     }
//     return count;
// }

// var inputString = prompt('Enter a string:');
// var letterToCount = prompt('Enter the letter to count:');
// var result = countOccurrences(inputString, letterToCount);
// document.write('Number of occurrences of ' + letterToCount + ': ' + result);
//        Q#14
function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    document.write('The circumference is ' + circumference);
}

function calcArea(radius) {
    var area = Math.PI * Math.pow(radius, 2);
    document.write('The area is ' + area);
}

var radius = parseFloat(prompt('Enter the radius of the circle:'));
calcCircumference(radius);
document.write('<br>');
calcArea(radius);









