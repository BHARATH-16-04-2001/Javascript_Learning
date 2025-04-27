// Dates

let myDate = new Date()
// console.log(myDate);            //2025-04-15T04:55:33.410Z

// console.log(myDate.toString()); //  Tue Apr 15 2025 04:56:29 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toISOString());   //  2025-04-15T04:57:23.844Z
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(myDate.getFullYear());

// let otherDate = new Date(2023,0,22)
// console.log(otherDate.toDateString());

let withTime = new Date(2023,0,11, 5, 5, 22)
// console.log(withTime.toLocaleString());


// let timeStamp = Date.now()
// console.log(timeStamp);
// console.log(withTime.getTime());
// console.log(Date.now() / 1000 );

// console.log(Math.floor(Date.now() / 1000));

let newdate = new Date()
console.log(newdate.getDay());

console.log(newdate.toLocaleString('default', {
    weekday : "long",
    month : "long",
    day : "numeric",
}))









