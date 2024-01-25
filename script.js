// Challenge 1: Create a for loop to print all the even numbers till 100 in the console.
for (let i=0;i<=100;i++) {
  if (i%2==0) console.log(i)
  
}


// Challenge 2: Create a while loop to print all the odd numbers till 100 in the console.
var i=0;
while (i<100) {
  if (i%2==1) {
    console.log("i= "+i);
  }
  i++;
}

// Challenge 3: Create a do while loop to print all the multiples of 3 till 100 in the console.

var i=0;
do {
  i+=3;
  console.log(i);
} while(i<99);


// Challenge 4: Create a for loop to print all the prime numbers till 100 in the console.

for (let i=0;i<=100;i++) {
  res=isPrime(i);
  if (res==true){
    console.log(i+" is Prime")
  }
  else {
    console.log(i,"is Non Prime")
  }
}
function isPrime(N) {
  let count=0
  for (i=0;i<=N;i++) {
    if (N%i==0) {
      count+=1
    }
  }
  if (count==2) {
  return true
}
else {
  return false
}
}
