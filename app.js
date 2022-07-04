////////////////////////////
// 2.1 Basic data types
// 2.2 Variables
// 2.3 const and let
// const a = 10;
// const b = 2;
// let myName = "nico";

// console.log(a + b);
// console.log(a * b);
// console.log(a / b);
// console.log("hello " + myName);

// myName = "nicolas";
// console.log("your new name is " + myName);

////////////////////////////////////////////////////////////////////////
// 2.4 Booleans
// const amIFat = null;
// let something;
// console.log(amIFat);
// console.log(something);

////////////////////////////////////////////////////////////
// 2.5 Arrays
// const mon = "mon";
// const tue = "tue";
// const wed = "wed";
// const thu = "thu";
// const fri = "fri";
// const sat = "sat";
// const sun = "sun";

// // const daysOfWeek = ["mon" , "tue" , "wed" , "thu" , "fri" , "sat" , "sun"];
// const daysOfWeek = ["mon" , "tue" , "wed" , "thu" , "fri" , "sat"];

// // console.log(daysOfWeek);
// // const nonsense = [1, 2, "hello", false, null, true, undefined, "nico"];

// // console.log(daysOfWeek, nonsense);
// console.log(daysOfWeek);
// // Get Item from Array
// console.log(daysOfWeek[4]);     // zero base
// // Add one more day to the array
// daysOfWeek.push("sun");
// console.log(daysOfWeek);

//////////////////////////////////////////////////////////////////////////////////////////
// 2.6 Objects

// bad
// const playerName = "nico";
// const playerPoint = 121212;
// const playerHandsome = false;
// const playerFat = "little bit";

// player[o] == name
// const player = ["nico", 121212, false, "little bit"];        // bad, 각 항목이 무엇을 뜻하는지 알 수 없다

// object, not list
// const player = {
//     name : "nico",      // property
//     points : 10,
//     fat : true,  
// };

// // console is object, too ?
// console.log(player);
// console.log(player.name);
// console.log(player["name"]);

// console.log(player);
// player.fat = false;     // object 안의 내용물을 바꾸는 것으로 에러 아님, player object 가 const 임.
// console.log(player);

// player.lastName = "potato";     // property 가 추가됨
// console.log(player);

// console.log(player);
// player.points = player.points + 15;
// console.log(player);

//////////////////////////////////////////////////////////////////////////////////////////
// 2.7 Function

// So many Ctrl+C,V
// console.log("hello my name is nico");
// console.log("hello my name is dal");
// console.log("hello my name is Flynn");
// console.log("hello my name is nico");

// // definition, implementation
// function sayHello(nameOfPerson, age) {
//     // console.log("Hello my name is ");
//     // console.log(nameOfPerson);
//     console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
//   }
  
//   // no parameter
//   // console.log();
//   // alert();
//   // sayHello();
//   // sayHello();
//   // sayHello();
  
//   sayHello("nico", 10);
//   sayHello("lynn", 23);
  
//   function plus(a, b) {
//     console.log(a+b);
//   }
  
//   plus();    // NaN (Not a Number)
//   plus(8, 60);
// function divide(a, b) {
//     console.log(a / b);
// }

// divide(98, 20);

// const player = {
//     name : "nico",
//     sayHello : function() {
//         console.log("helo!");
//     },
// };
// player.sayHello();

// const player = {
//     name : "nico",
//     sayHello : function(otherPersonsName) {
//         // console.log("helo!");
//         console.log("hello " + otherPersonsName + " nice to meet you!");
//     },
// };
// player.sayHello("lynn");
// player.sayHello("nico");

/////////////////////////
// 2.9 Recap, 2.10 Recap 2
// // Homework
// const Calc = {
//     plus : function (a, b) {
//         console.log(a + b);
//     },
//     minus : function (a, b) {
//         console.log(a - b);
//     },
//     multi : function (a, b) {
//         console.log(a * b);
//     },
//     div : function (a, b) {
//         if (b == 0) {
//             alert("Error! - 0 Divide");
//             console.log("Error! - 0 Divide")
//         } else {
//             console.log(a / b);
//         }
//     },
//     power : function (a, b) {
//         let c = 1;
//         for (let i = 0; i < b; ++i) {
//             c *= a;
//         }
//          // ** is power
//         console.log(c);
//     },
// };

// Calc.div(4, 0);
// Calc.power(3, 1);

////////////////////////////////
// 2.11 Returns

// const Calc = {
//     plus : function (a, b) {
//         console.log(a + b);
//     },
//     minus : function (a, b) {
//         console.log(a - b);
//     },
//     multi : function (a, b) {
//         console.log(a * b);
//     },
//     div : function (a, b) {
//         if (b == 0) {
//             alert("Error! - 0 Divide");
//             console.log("Error! - 0 Divide")
//         } else {
//             console.log(a / b);
//         }
//     },
//     power : function (a, b) {
//         let c = 1;
//         for (let i = 0; i < b; ++i) {
//             c *= a;
//         }
//          // ** is power
//         console.log(c);
//     },
// };

// console.log(Calc.plus(4, 0));

/////////////////////////////////////
// 2.11 Returns
// const age = 96;
// function calculateKrAge(ageOfForeigner) {
//     return ageOfForeigner + 2;
// }

// const krAge = calculateKrAge(age);

// console.log(krAge);

// const Calc = {
//     plus : function (a, b) {
//         return a + b;
//     },
//     minus : function (a, b) {
//         return a - b;
//     },
//     multi : function (a, b) {
//         return a * b;
//     },
//     div : function (a, b) {
//         if (b == 0) {
//             alert("Error! - 0 Divide");
//             return "Error! - 0 Divide";
//         } else {
//             return a / b;
//         }
//     },
//     power : function (a, b) {
//         return a**b;
//     },
// };

// // const plusResult = Calc.plus(2, 3);
// // console.log(plusResult);
// const plusResult = Calc.plus(2, 3);
// const minusResult = Calc.minus(plusResult, 3);
// const timesResult = Calc.multi(2, minusResult);
// const divideResult = Calc.div(timesResult, plusResult);
// const powerResult = Calc.power(divideResult, minusResult);

///////////////////////////////////
// 2.13 Conditionals

// const age = prompt("How old are you?");

// // console.log(typeof age);
// // console.log(typeof "15", typeof parseInt("15"));
// console.log(age, parseInt(age));

// const age = parseInt(prompt("How old are you?"));

// console.log(age);

///////////////////////////////////
// 2.14 Conditionals 2

// const age  = parseInt(prompt("How old are you?"));

// if (isNaN(age)) {
//     console.log("Please write a number");
// } else {
//     console.log("Thank you for writting your age.");
// }

///////////////////////////////////
// 2.15 Conditionals 3

// const age  = parseInt(prompt("How old are you?"));

// if (isNaN(age) || age < 0) {
//     console.log("Please write a real positive number");
// } else if (age < 18) {
//     console.log("You are too young.");
// } else if (age >= 18 && age <= 50) {
//     console.log("You can drink.");
// } else if (age > 50 && age <= 80) {
//     console.log("You should exercise");
// } else if (age > 80) {
//     console.log("You can do whatever you want");
// }

///////////////////////////////////
// 2.16 Recap

// const age  = parseInt(prompt("How old are you?"));

// if (isNaN(age) || age < 0) {
//     console.log("Please write a real positive number");
// } else if (age < 18) {
//     console.log("You are too young.");
// } else if (age >= 18 && age <= 50) {
//     console.log("You can drink.");
// } else if (age > 50 && age <= 80) {
//     console.log("You should exercise");
// } else if (age > 80) {
//     console.log("You can do whatever you want");
// } else if (age === 100) {
//     console.log("wow you are wise");
// }

//////////////////////
// 3.0 The Document Object

// document.title = "Hello! From JS!";

//////////////////////
// 3.1 HTML in Javascript
// const title = document.getElementById("title");

// // console.dir(title);
// title.innerText = "Got you!";

// console.log(title.id);
// console.log(title.className);

//////////////////////
// 3.2 Searching For Elements

// title 이 존재하지 않음, 에러!
//// const title = document.getElementById("title");
//// title.innerText = "Got you!";

// const hellos = document.getElementsByClassName("hello");
// console.log(hellos);

// // const title = document.getElementsByTagName("h1");   // 여전히 배열로 가져옴
// const title = document.querySelector(".hello h1");      // 일치하는 첫번째만 가져옴, tag object로
// // id 면 # 을 앞에 붙여줌, :firs-child 로 명시할 수도
// console.log(title);
// title.innerText = "Hello";

//////////////////////
// 3.3 Events

// const title = document.querySelector(".hello:first-child h1");

// console.dir(title);

// // title.innerText = "Hello";
// // title 의 style > color 속성을 바꾼다
// // title.style.color = "blue";

// // click event
// // click event handler
// function handleTitleClick() {
//     console.log("title was clicked!");
// }
// // add event handler
// title.addEventListener("click", handleTitleClick);
    
// //////////////////////
// // 3.4 Events part Two
    
// const title = document.querySelector(".hello:first-child h1");
// console.dir(title);

// // click event
// // click event handler
// function handleTitleClick() {
//     title.style.color = "blue";
// }
// function handleMouseEnter() {
//     title.innerText = "Mouse is heare!";
// }
// function handleMouseLeave() {
//     title.innerText = "Mouse is gone!";
// }
// // add event handler
// title.addEventListener("click", handleTitleClick);
// title.addEventListener("mouseenter", handleMouseEnter);
// title.addEventListener("mouseleave", handleMouseLeave);

// //////////////////////
// // 3.5 More Events
// // Event 를 등록하는 방식은 2가지
// // addEventListener 이용 - removeEventListener 
// // onclick = 에 직접 추가

// // title.onclick = handleTitleClick;    // 이렇게 해도 됨
// // 그런데 addEventListener 로 하면 
// // 나중에 removeEventListener 로 제거할 수 있다

// // Window Event
// // window object 는 기본적으로 제공, document object 가 그러하듯
// function handleWindowResize() {
//     document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy() {
//     alert("copier!");
// }

// function handleWindowOffline() {
//     alert("SOS no wifi!");
// }

// function handleWindowOnline() {
//     alert("ALL GOOD!!");
// }

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);

//////////////////////
// 3.6 CSS in Javascript

// const h1 = document.querySelector("div.hello:first-child h1");
// console.dir(h1);

// function handleTitleClick() {
//     const currentColor = h1.style.color;
//     let newColor;
//     if (currentColor === "blue") {
//         newColor = "tomato";
//     } else {
//         newColor = "blue";
//     }
//     h1.style.color = newColor;
// }

// h1.addEventListener("click", handleTitleClick);

//////////////////////
// 3.7 CSS in Javascript part Two

// const h1 = document.querySelector("div.hello:first-child h1");
// console.dir(h1);

// function handleTitleClick() {
//     const clickedClass = "clicked sexy-font"; // magic string
//     if (h1.className === clickedClass) {
//         h1.className = "";
//     } else {
//         h1.className = clickedClass;
//     }
// }

// h1.addEventListener("click", handleTitleClick);

// javascript 로 모든 class name 을 변경하지 않는 것이 중요!!!!!!!

//////////////////////
// 3.8 CSS in Javascript part Three
// javascript 로 모든 class name 을 변경하지 않는 것이 중요!!!!!!!
const h1 = document.querySelector("div.hello:first-child h1");
console.dir(h1);

function handleTitleClick() {
    // const clickedClass = "clicked"; // magic string
    // if (h1.classList.contains(clickedClass)) {
    //     h1.classList.remove(clickedClass);
    // } else {
    //     h1.classList.add(clickedClass);
    // }
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);