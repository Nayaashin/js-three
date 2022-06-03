//1-задание
let a = [1, 2, 3, 4, 5];
for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}

//2-задание
let b = [2, 5, 9, 15, 0, 4];
for (let i = 0; i < b.length; i++) {
  if (b[i] > 3 && b[i] < 10) {
    console.log("Меньше 10 и больше 3 ", b[i]);
  }
}

//3-задание
let num = [10, 20, 30, 50, 235, 3000];
for (let i = 0; i < num.length; i++) {
  for (let p = 0; p < i; p++) {
    if ((i[p] == 2, 1, 5)) {
      console.log(i[p]);
    }
  }
}

//4-задание
let numStr = [1, 2, 45, "hello", 233, 100, "world", 45];
for (let i = 0; i < numStr.length; i++) {
  if (typeof +numStr[i] === typeof numStr[i]) {
    console.log("тип Number", numStr[i]);
  }
}

//5-задание
let week = [
  "Monday",
  "tuesday",
  "Wednesday",
  "Thursday",
  "friday",
  "Saturday",
  "Sunday",
];
for (let i = 5; i < week.length; i++) {
  console.log(week[i]);
}
