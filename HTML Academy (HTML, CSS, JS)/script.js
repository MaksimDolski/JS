const scripts = 3;
const styles = 2;

const template = `Scripts - ${scripts}; 
styles - ${styles};
Total: ${scripts + styles}.`;

console.log(template);

// 
const multiply = (left, right) => left * right;

console.log(multiply(2,2));
console.log(multiply(3,3));

//
const mult = (left, right) => {
  return 6 * 6;
};
console.log(mult());

//
const mult2 = (left, right) => {
  return left * right;
};

console.log(mult2(25, 2));

// for.Each();
let numbers = [1, 2, 34, 4, 12, 38, 21, 57, -5];
for(let i = 0; i < numbers.length; i++){
console.log(numbers[i]);  
}

//
numbers.forEach(function(item) {
  console.log(item);
});

// Filter();
let num = [1, -2, 5, -23, -1, -45, 56, -54];
let neg = [];

for(let i = 0; i < num.length; i++){
  if(num[i] < 0){
      neg.push(num[i]);
  }
}

console.log(neg);

//
let num2 = [1, -2, -3, -5, 3, 5];
let neg2 = num2.filter(function(item) {
  return item < 0;
});

console.log(neg2);

// map();
let num3 = ['1', '2', '3', '4', '5', '6'];
let num4 = [];

for(let i = 0; i < num3.length; i++){
  num4.push(parseInt(num3[i]));
}

console.log(num4);

//
let num5 = num3.map(function(item){ 
   return parseInt(item);
});

console.log(num5);

// every();
let num6 = [1, 2, 3, 4, -1 ];
let allPos = true;

for(i = 0; i < num6.length; i++){
  if(num6[i] < 0){
    allPos = false;
    break;
  }
}
 console.log(allPos);
 
 let num7 = num6.every(function(item){
     return item >= 0;
   });
   
  console.log(num7);
  
  // some(); - if some number is negative
  let num8 = [1, -2, 4, 5, 12, 33, 4, 66];
  let hasNeg = false;
  
  for(i = 0; i < num8.length; i++) {
    if(num8[i] < 0) {
      hasNeg = true;
      break;
    }
  }
  
  console.log(hasNeg);
  
  let hasNeg2 = num8.some(function(item) {
    return item < 0;
  });
  
  console.log(hasNeg2);
  
  // reduce(); - можно сложить все значения в массиве
  
  let num9 = [1, -2, 3, 45, -45, 2, 5];
  let sum = 0;
  
  for(let i = 0; i < num9.length; i++) {
    sum = sum + num9[i]; 
  }
  
  console.log(sum);
  
  let sum2 = num9.reduce(function(total, item){
    return total + item;
  },0);
  
  console.log(sum2);
  
  // /////////////////////////////////////
  const musicians = [
    {name: `Ilja`, familyName: `Tsert`},
    {name: `Max`, familyName: `Pane`},
    {name: `John`, familyName: `Smith`}
  ];
  
  const band = musicians.map((it) => `${it.name} ${it.familyName}`);
  
  console.log(band);
  
  // or
  
  const band2 = musicians.map(function(it) {
    return it.name + ' ' + it.familyName;
  });
  
  console.log(band2);
  
  // Кекс дружит с каждым из своих друзей
  
  const keks = {
    name: 'Keks',
    friends: ['Snezok', 'Barsik'],
    showFriends: function() {
      this.friends.forEach((item) => {
        // console.log(this.name + ' ' + 'druzit' + ' with ' + item)
        console.log(`${this.name} druzit with ${item}`);
      });
    }
  };
  
  keks.showFriends();
  
   
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 //END
 
 


