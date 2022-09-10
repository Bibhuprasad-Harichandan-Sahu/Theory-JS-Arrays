
let dailyActivities = ['sleep', 'work', 'exercise']
let newRoutine = ['eat'];
let ages = [4, 9, 16, 25, 36, 49];

// sorting elements in the alphabetical order
dailyActivities.sort();
console.log(dailyActivities); // ['exercise', 'sleep', 'work']

//finding the index position of string

console.log(dailyActivities.indexOf('sleep')); // 2


// slicing the array elements
const newDailyActivities = dailyActivities.slice(1);
console.log(newDailyActivities); // [ 'sleep', 'work']

// concatenating two arrays
const routine = dailyActivities.concat(newRoutine);
console.log(routine); // ["exercise", "sleep", "work", "eat"]

// filter an array
const adults = ages.filter(checkAdult);
function checkAdult(age) {
  return age >= 18;
}
console.log(adults); // [25, 36, 49]

//map a function to an array
const ages_sqrt = ages.map(Math.sqrt)
console.log(ages_sqrt); // [2, 3, 4, 5, 6, 7]





let alphabetical = ['z','m','o','p','q','b','a'];
console.log(alphabetical.sort());
//['a', 'b', 'm', 'o', 'p', 'q','z']

let cities = ['florida','mexico','futala','dubai'];
//finding the index position of string
console.log(cities.indexOf('dubai'));//3

console.log(cities.slice(1));//[ 'mexico', 'futala', 'dubai' ]

console.log(cities.concat('San Fransisco'));


let age = [20,9,3,,5,22,25,43,41,33,23];
adult = age.filter(checkadult);
function checkadult(age) {
return age >=18;
}
console.log(adult);//[20,22,25,43,41,33,23]

//using forEach() function
let names = ['aman','sourav','sheetal'];
names.forEach(function(ele,i){
    console.log(ele);
})


//another method for forEach
let bikes = ["cbz","xcd",'pulsar','fz'];
bikes.forEach((n) => {
    console.log(n)
});



//checks specified element is there or not=>includes()
console.log(bikes.includes("pulsar"));//True
//it will give you a boolean value


//checks the the index value => findindex()
let Folks = ['amit','ankit','monty'];
function ismonty(boy) {
    return boy === 'monty';

}
console.log(Folks.findIndex(ismonty));  //2

//map() function

let int = [2,3,4,5,6];
let sum = int.map(function(ele){
    return ele+2;
})
console.log(sum);//[4,,5,6,7,8]

//using slice() method
let integers =[1,2,3,4,5];
integers3 = integers.splice(3,4);
 console.log(integers3);//[4,5]
 
 integers1 = integers.splice(0,3);
 console.log(integers1);//[1,2,3]
 integers2 = integers.splice(-1);
 console.log(integers2);//5

 //usingfind() method
 let seasons = ['winter','summer','rainy']
 res = seasons.find(findrainy)
 function findrainy(item) {
    return item === 'rainy';
 }
console.log(res);//rainy












  