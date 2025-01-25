for (i = 0; i <= 10; i++) {
  if (i == 5) {
    // console.log("5 is best number");
  }
  //   console.log(i);
}

for (let i = 0; i <= 10; i++) {
  //   console.log(`outer loop ${i}`);
  for (let j = 0; j <= 10; j++) {
    // console.log(`outer loop ${i} & inner loop ${j}`);
  }
}
array = ["apple", "banana", "mango", "orange"];
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  //   console.log(element);
}

for (i = 0; i <= 10; i++) {
  if (i == 5) {
    // console.log(`5 is detected`);
    break;
  }
  //   console.log(`value of i is ${i}`);
}

for (i = 0; i <= 10; i++) {
  if (i == 5) {
    // console.log(`5 is detected`);
    continue; // skips the current iteration loop (skips 5 in for loop in this condition)
  }
  console.log(`value of i is ${i}`);
}
