// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.

//  solution using for loop
function sing() {
    for (let i = 99; i > 0; i--) {
      let bottles = i === 1 ? "bottle" : "bottles";
      let nextBottles = i - 1 === 1 ? "bottle" : "bottles";
      let nextCount = i - 1 === 0 ? "no more" : i - 1;
      console.log(`${i} ${bottles} of beer on the wall, ${i} ${bottles} of beer.`);
      console.log(`Take one down and pass it around, ${nextCount} ${nextBottles} of beer on the wall.\n`);
    }
    console.log("No more bottles of beer on the wall, no more bottles of beer.");
    console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
  }
// sing()

// solution using while loop below

function beerBootles(){
    let bottles = 99;
    let lyrics = ""
    while(bottles >0){
      if(bottles ===  1){
        lyrics += `${bottles} bottle of beer on the wall, ${bottles} bottle of beer.\n`;
        lyrics += `Take one down and pass it around, no more bottles of beer on the wall.\n\n`;
      
    } else{
      lyrics += `${bottles} bottle of beer on the wall, ${bottles} bottle of beer.\n`;
      lyrics += `Take one down and pass it around,${bottles - 1 } ${(bottles - 1) === 1 ? "bottle" : "bottles"} of beer on the wall.\n\n`;
    }
  bottles --;
  }
   
console.log(lyrics);
console.log("No more bottles of beer on the wall, no more bottles of beer.");
console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
}
beerBootles()