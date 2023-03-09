// Write your solution here!
const cats = ["Milo","Otis","Garfield"];

//adds a cat to the end of the array
function destructivelyAppendCat(name){
    return cats.push(name);
}
destructivelyAppendCat("Ralph"); 


//adds a cat to the begining of the array
function destructivelyPrependCat(name){
    return cats.unshift(name);
}
destructivelyPrependCat("Ralph");


//removes last cat from the array
function destructivelyRemoveLastCat(name){
    return cats.pop(name);
}
destructivelyRemoveLastCat("Ralph");



//removes first cat from the array
function destructivelyRemoveFirstCat(name){
    return cats.shift(name);
}
destructivelyRemoveFirstCat("Ralph");


//adds a cat to the cats array and returns a new array, leaving the cats array unchanged
function appendCat(name){
    const pets = cats.slice();
    pets.push(name);
    return pets;
}
appendCat("Ralph");


//prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
function prependCat(name){
    const pets = cats.slice();
    pets.unshift(name);
    return pets;
}
prependCat("Ralph");



//removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
function removeLastCat(name){
    const pets = cats.slice();
    pets.pop(name);
    return pets;
}
removeLastCat("Ralph");


//removes the first cat in the cats array and returns a new array, leaving the cats array unchanged
function removeFirstCat(name){
    const pets = cats.slice(); 
    pets.shift(name);
    return pets;
}
removeFirstCat("Ralph");
