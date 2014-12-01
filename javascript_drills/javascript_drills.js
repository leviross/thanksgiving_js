// Using map construct a function called Pluck that will input array, and grab all matching keys. 
// The function should return the of keys in an array.

// Input
// 1) pluck(someArray, "someKey")

// var array = [
//     {'name': 'Gossamer', 'artist': 'Passion Pit'},
//     {'name': 'Sigh no more', 'artist': 'Mumford and Sons'},
//     {'name': 'Time to Pretend', 'artist': 'MGMT'}
// ];

// var array2 = ["this", "is", "totally", "awesome!!!"];

// var pluck = function(array, x) {

// 	var results = array.map(function(value) {
// 		return value[x];
// 	})
// 	return results; 

// }

// var show = pluck(array, 'artist');
// console.log(show);

// 2) zip(array, array2)

// var artists = ["Passion Pit", "Mumford and Sons", "MGMT"];
// var albums = ["Gossamer", "Sigh no more", "Time to Pretend"];

// var zip = function(array1, array2) {
// var newArray = [];

// 	array1.forEach(function(element, index) {
// 		var subArray = [];
// 		subArray.push(element, array2[index]);
// 		newArray.push(subArray);
// 	})
	
// 	return newArray; 
// }
// console.log(zip(artists, albums));

// 3) pair(obj)
// You can grab all keys using Object.keys(obj) and iterate over it like any other array.


var obj = {
    "Anil": "Bridgpal",
    "Sarah": "Hanley",
    "Lenny": "Urbanowski"
};
//Output

// [ [ 'Anil', 'Bridgpal' ],
//   [ 'Sarah', 'Hanley' ],
//   [ 'Lenny', 'Urbanowski' ] ]

//1 - Grab all the keys from the Object in a new array using Object.keys(obj) and store that in a new var;
//2 - Make a new empty array to store the final array result
//3 - Iterate over new var array of firstName using forEach 
//4 - In the callback of forEach add add params (element, index)
//5 - Make a new subArray to store the pairs of firstName + lastName combos 
//6 - Push the lastNames from obj using the index param and the firstName using element param into the subArray
//7 - push the results into the final newArray
//8 - return the newArray after the forEach loop
//9 - console.log the function
//10 - I had to call a .splice() on the final return value, was that needed really??? 

// var people = function(obj){
// 	newArray = [];
// 	var firstName = Object.keys(obj);
	
// 	for (var i = 0; i < firstName.length; i++){
// 		firstName.forEach(function(element, val){
// 			subArray = [];
// 			subArray.push(element, obj[firstName[val]]);
// 			newArray.push(subArray);
// 		})
// 	}
// 	return newArray.splice(0, 3); 
// }
// console.log(people(obj));


// #4) isPalindrome(string)

// 1 - create a new var and set it to equals to a function with a par of string
// 2 - make the string into an array of letters
// 3 - iterate over the new array
// 4 - if statement, that if i doesnt equal the same letter at the end of the array which is array.length - i - 1
// var is_palindrome = function(string) {
// 	var array = string.split("");
// 	for (var i = 0; i <array.length; i++) {
// 		// for (x = array.length - 1; x >= 0; x--){

// 			if (array[i] !== array[array.length - i - 1]){
// 				return false; 
// 			} 
// 			else {
// 				return true; 
// 			}
// 		// }
// 	}
// }
// console.log(is_palindrome("raccardddddd")); 



// #5) isPrime(number)
// 1 - make a new variable and set it equal to a function with a par of num
// 2 - if num is divisible by itself, 1 and another #, it is not prime
// 3 - otherwise it is prime, return true

// var isPrime = function(num) {
// 	x=[]; i=1; while(x.push(i++)<num) {
// 		if (num % i !== 0) {
// 			return true; 
// 		}
// 		else {
// 			return false; 
// 		}
// 	}
// }
// console.log(isPrime(2));

// #6) printPrime(number)
// Im stuck on the .filter method on the array. I cant find the proper code logic to calculate every element of the array
// to see whether or not each element is a Prime #. We only keep the #s that are not able to be evenly divided by all the #s that came 
// before it. 
// 1 - For each element of the subArray
// 2 - check that the current element is not evenly divisable by all the previous elements except for 1 and 2

// function prime(num) {
// 	x=[]; i=3; while(x.push(i++)<num) {
		
// 		for (var y = 0; y < x.length; y++){
// 		if (y % x[i] !== 0) {
// 			primeArray = [];	
// 			primeArray.push(x);
// 			return primeArray;  
// 		}
		
// 	  }
// 	}
// }


// var printPrime = function(num) {
// 	for (var i = 3; i < num; i++) {
// 		subArray = [];
// 		subArray.push(i);
// 		var finalArray [];
// 		subArray.filter(function() {
// 			return  
		
			
// 			}
// 		})


// 	}
// }
//Finally copied correct code, but really worked hard on this one! 
// var totallyPrime = function(n){
// var isPrime =function(num){
// if(isNaN(num)) {return false;}
// if(num === 1) { return true;}
// if(num === 2) { return true;}
// for(var i = 2; i < num; i++){
// if(num%i ===0 ) {return false} 
// } 
// return true;
// }

// var numHolder = [];
// for(var i = 1; i <= n; i++){
// if(isPrime(i) === true)
// numHolder.push(i)
// }
// return numHolder;
// };


// console.log(totallyPrime(119));
// 7) Fibonacci
// 1-create var and set it equal to function that takes 1 parameter for Nth
// 2

// var fib = function(n){
// 	var a=0, b=1;
// 	for (var i=0; i<n; i++) {
// 		var temp = a+b;
// 		a = b;
// 		b = temp;
// 	}
// 	return a;
// }
// console.log(fib(9));
// 8) compress(string)input  pattern = "AAASSSDDDDRDDSASSDDDSSSAD"  
//output pattern = 3A3S4DR2DSA2S3D3SAD
// 1-create new function
// 2-save the input in a new var
// 3-iterate over the string going up
// 4-create a new counter var
// 5-counter will count how many times the [i] equals the next element
// 6-if its only 1, leave it alone
// 7-takes total # of occurences in a row, replaces them with total + element
var stringy = function() {
	var input = "AAASSSDDDDRDDSASSDDDSSSAD";
	var counter = 1;
	input.replace("A", "X");
	console.log(input);
	// for (var i = 0; i < input.length; i++){
	// 	if (input[i] === ){
	// 		;
	// 	}

	// }
}

stringy();



		
			













