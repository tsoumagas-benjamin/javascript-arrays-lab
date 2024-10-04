//Step 1
let names = ["Fred", "Daphne", "Velma", "Shaggy", "Scooby"];

console.log(names);

//Step 2
let firstName = names.at(0);
let middleName = names.at(Math.floor(names.length/2));
let lastName = names.at(-1);

console.log(firstName);
console.log(lastName);
console.log(middleName);

//Step 3
console.log(names.length);

//Step 4
let newLength = names.push("Scrappy");
let impostor = names.pop();
let humans = names.splice(0,4);

console.log(newLength);
console.log(impostor);
console.log(humans);

//Step 5
names = ["Fred", "Daphne", "Velma", "Shaggy", "Scooby"];
for (i = 0; i < 5; i++){
    console.log(names[i]);
}

names.forEach((name) => console.log(name));

//Step 6
const [first, second, ...rest] = names;
console.log(first);
console.log(second);
console.log(rest);