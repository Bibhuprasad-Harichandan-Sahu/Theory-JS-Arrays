let dailyActivities = ['work', 'eat', 'sleep', 'exercise'];

// remove the last element
dailyActivities.pop();
console.log(dailyActivities); // ['work', 'eat', 'sleep']

// remove the last element from ['work', 'eat', 'sleep']
const removedElement = dailyActivities.pop();

//get removed element
console.log(removedElement); // 'sleep'
console.log(dailyActivities);  // ['work', 'eat']

let foods = ['apple','bananna','mango'];
// remove the last element
foods.pop();
console.log(foods);//[apple,bananna]

// remove the first element
foods.shift();

console.log(foods);//[bananna]

