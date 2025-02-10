// videos from 134-146
// task1
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
exp1 = /\d{4}:\w{2}\d:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/;
console.log(ip.match(exp1));
// task2
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
os =/Os(\d+)?O/g;
    console.log(specialNames.match(os));
// Output
// ['Os10O', 'OsO', 'Os100O']
// task3
let phone = "+(995)-123 (4567)";
rep = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/;
    console.log(phone.match(rep));
// task4
//let re4 = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
// s is optional
// //with escape characters
// matches the www.[]nin-capturing group
// any words
// . then ? makes more words optional
// .*makes more words optional
// task 5
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re5 = /\d{2}\s?-?\s?\/?\d{2}\s?-?\s?\/?\d+/g; // Write Pattern Here

console.log(date1.match(re5)); // "25/10/1982"
console.log(date2.match(re5)); // "25 - 10 - 1982"
console.log(date3.match(re5)); // "25 10 1982"
console.log(date4.match(re5)); // "25 10 82"
// task 6
let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";

let re = /^(http|https)?(:\/\/)?(www\.)?elzero\.org(:\d+)?(\/.*)?$/;
//let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?/i;

  console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));
// videos from 147 to 158
// task 1
class Car{
  constructor(name, model, price) {
    this.name = name;
    this.model = model;
    this.price = price;
  }
  run() {
    console.log(`Car is running now`);
  }
  stop()
  {
console.log(`Car is stopped`);
  }

}
let toyota = new Car("Toyota","toyota",50000);
let honda = new Car("Honda","honda", 30000);
let chevrolet = new Car("Chevrolet","chevrolet",40000);
console.log(`Car one Name is ${toyota.name} and its model is ${toyota.model} and Price is ${toyota.price}`);
toyota.run();
// function Car(name, model, price) {
//   this.n = name;
//   this.m = model;
//   this.p = price;
// }

// Needed Output

// ("Car One Name Is MG And Model Is 2022 And Price Is 420000");
// ("Car Is Running Now");
// task 2
class Phone {
  constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
  }
}

// Write Tablet Class Here
class Tablet extends Phone
{
constructor(name,serial,price,size)
{
  super(name, serial, price);
  this.size = size;
  }
  fullDetails()
  {
    return `${this.name} Serial is ${this.serial} And Size Is ${this.size}`;
  }
}

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown
// task 3
// Edit The Class
class User {
  #c;
  constructor(username, card) {
    this.u = username;
    this.#c = card;
  }
  creditcard() {
    return this.#c.toString().match(/\d{4}/g).join("-");
  }
  get showData() {
    return `Hello ${this.u} Your Credit Card Number Is ${this.creditcard()}`;
  }

}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined
// task4

// Write Your Code Here
String.prototype.addLove = function ()
{
  return `I Love ${this} Web School`;
  }
// Do Not Edit Below
let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School

// task 5
const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};

// Write Your Code Here
Object.defineProperty(myObj, "score",
  {
    writable: false,
    enumerable: true, configurable:true
  }


)
Object.defineProperty(myObj, "id", {
  writable: true,
  enumerable: false,
  configurable: true
});

delete myObj.country;

myObj.score = 500;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

// Needed Output

// "username => Elzero"
// "score => 1000"
// {username: 'Elzero', score: 1000, id: 100}


// videos from 159 to 168
// task 1
let birthday = new Date("Nov 15 2004");
let datenow = new Date("Nov 25 2024");

let diff = datenow - birthday;
console.log(diff);
console.log(diff/1000 );
console.log(diff / 1000 / 60);
console.log(diff / 1000 / 60 / 60);
console.log(diff / 1000 / 60 / 60 / 24);
console.log(diff / 1000 / 60 / 60 / 24 / 30);
console.log(diff / 1000 / 60 / 60 / 24 / 30 / 12);
// task 2


let today = new Date();
today.setTime(1);
today.setFullYear(1980);
today.setHours(0);
today.setSeconds(1);
console.log(today);
// Needed Output

// "Tue Jan 01 1980 00:00:01 GMT+ 0200 (Eastern European Standard Time)"
// task 3
let last = new Date();
let months = ["jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
last.setDate(0);
console.log(last);
console.log(`last month is ${months[last.getMonth()]} and last day is ${last.getDate()} `);	 
// Needed Output
// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
// "Previous Month Is April And Last Day Is 30"
// task 4
let birth1 = new Date("2004 11 15");
console.log(birth1);
let birth2 = new Date("Nov 15 2004");
console.log(birth2);
let birth3 = new Date("2004@11@15");
console.log(birth3);

// Needed Output
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// task 5
// let timee1 = performance.now(); // Start time

// for (let i = 1; i < 100000; i++) {
//   console.log(i);
// }

// let timee2 = performance.now(); // End time

// console.log(`Loop Took ${Math.trunc(timee2 - timee1)} ms`);
// task 6

// // Write Your Generator Function Here
// function* gen()
// {
//   let index = 14;
//   let num = 140;
//   let sum = index + num;
//   while (true) {
//     yield sum;
//     sum += num += 200;
    
//   }

// }
// let generator = gen();

// console.log(generator.next()); // {value: 14, done: false}
// console.log(generator.next()); // {value: 154, done: false}
// console.log(generator.next()); // {value: 494, done: false}
// console.log(generator.next()); // {value: 1034, done: false}
// console.log(generator.next()); // {value: 1774, done: false}
// console.log(generator.next()); // {value: 2714, done: false}
// console.log(generator.next()); // {value: 3854, done: false}
// console.log(generator.next()); // {value: 5194, done: false}
// console.log(generator.next()); // {value: 6734, done: false}
// task 7

function* genNumbers() {
  yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
  yield* ["A", "B", "B", "B", "C", "D"];
}

// Write Your Generator Function Here
function* genAll()
{
  yield* new Set (genNumbers());
  yield* new Set (genLetters());
}

let generator = genAll();

console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // {value: 2, done: false}
console.log(generator.next()); // {value: 3, done: false}
console.log(generator.next()); // {value: 4, done: false}
console.log(generator.next()); // {value: 5, done: false}
console.log(generator.next()); // {value: "A", done: false}
console.log(generator.next()); // {value: "B", done: false}
console.log(generator.next()); // {value: "C", done: false}
console.log(generator.next()); // {value: "D", done: false}

// videos from 169-178
// task 2
let req =new  XMLHttpRequest();
req.open('GET', './articles.json', true);
req.send();
// req.onreadystatechange = function ()
// {
//   if (req.readyState === 4 && req.status === 200)
//   {
//     console.log(this.responseText); 
//     setTimeout(() => { console.log("Data loaded"); }, 0);
    
//   }
// }
// task 3
// req.onreadystatechange = function () {
//   if (req.readyState === 4 && req.status === 200) {
//     let maindata = JSON.parse(req.responseText);
//     for (let i = 0; i < maindata.length; i++)
//     {
//       maindata[i].section = "All";
//     }
//     console.log(maindata);
//     let updateddata = JSON.stringify(maindata);
//     console.log(updateddata);
//   }
// };
// task 4
req.onreadystatechange = function () {
  if (req.readyState === 4 && req.status === 200) {
    let maindata = JSON.parse(req.responseText);
    let div = document.createElement("div");
    div.id = "data";
   
    for (let i = 0; i < maindata.length; i++) {
       let data = document.createElement("div");
      let title = document.createElement("h2");
      let titletext = document.createTextNode(maindata[i].title);
      title.appendChild(titletext);
            let article = document.createElement("p");
            let articletext = document.createTextNode(maindata[i].content);
            article.appendChild(articletext);
     let name = document.createElement("p");
     let nametext = document.createTextNode(maindata[i].name);
      name.appendChild(nametext);
       data.appendChild(title);
      data.appendChild(name);
      data.appendChild(article);

div.appendChild(data);
    }
        document.body.appendChild(div);

   
  }
};
// videos from 179-188
// task 1

// let getData = (apiLink) => {
//   return new Promise((resolve, reject) => {
//     let myreq = new XMLHttpRequest();

//     myreq.onload = () => {
//       if (myreq.readyState === 4 && myreq.status === 200) {
//         resolve(JSON.parse(myreq.responseText));
//       } else {
//         reject(new Error("No data found"));
//       }
//     };

//     myreq.onerror = () => reject(new Error("Request failed"));

//     myreq.open("GET", apiLink);
//     myreq.send();
//   });
// };

// getData("./last.json")
//   .then((result) => {
//     result.length = 5; // Limiting to 5 items
//     return result;
//   })
//   .then((result) => {
//     for (let i = 0; i < result.length; i++) {
//       let div = document.createElement("div");

//       let title = document.createElement("h3");
//       title.textContent = result[i].title;

//       let desc = document.createElement("p");
//       desc.textContent = result[i].description;

//       div.appendChild(title);
//       div.appendChild(desc);
//       document.body.appendChild(div);
//     }
//   })
//   .catch((error) => {
//     console.error(error);
//   });
// task 2
async  function fetchdata()
{
  try {
    let mydata = await fetch("./last.json");
    let data = await mydata.json();
    data.length = 5;
    for (let i = 0; i < data.length; i++) {
      let div = document.createElement("div");

      let title = document.createElement("h3");
      title.textContent = data[i].title;

      let desc = document.createElement("p");
      desc.textContent = data[i].description;

      div.appendChild(title);
      div.appendChild(desc);
      document.body.appendChild(div);
    }
  }
  catch (error) { console.log("no data"); }
};
fetchdata();
