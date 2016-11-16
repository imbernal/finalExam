//Question 1.1
//Find the error in the following for loop:


for (var i = 0; i < '5'; i++;) {
 console.log('i');
}

//Answer:


for (var i = 0; i < 5; i++) {
 console.log('i');
}
// 5/5 pts. But the 5 in i < 5 does not have to be a number. It works if 5 is a
// string too. for (var i = 0; i < '423'; i++) {} will run 423 times


//Question 1.2
//Find the error in the following conditional:
 if false {
   consola.log("hello")
 }else{
   console.log("hasta luego")
 }

 //Answer:
 if (false) {
   console.log("hello")
 }else{
   console.log("hasta luego")
 }
// 5/5 pts


//Question 1.3
//Find the error in the following code:
var x = 15;
if (x > 10){
   console.log(x is greater than ten);
}

//Answer:
var x = 15;
if (x > 10){
   console.log("x is greater than ten");
}
// 5/5 pts



//Question 1.4
//Find the error in the following code:
var y = 27;
if y === 27
  console.log(y);

//Answer:
var y = 27;
if (y === 27)
  console.log(y);
// 5/5 pts. In case you didn't know, JavaScript will run only the very next
// statement after an if statement if curly brackets are not included.



//Question 2.1
//What does will the console output when the following is entered.
 '1'+1

//a. 2
//b. "2"
//c. "11"
//d. 11

//Answer: c
// 5/5 pts



//Question 2.2
//Find the errors in the following
var name = "Roberto"
var time =3

//name"+ said "He's comming late.", the meetin is still at " + time +

//answer:
name + " said He's comming late, the meeting is still at "+ time +".");
// 5/5 pts


//Question 2.3
//What is the value of x?
//Hint: Remember PEMDAS (parenthesis, exponent, mult, div, add, sub)
var a = "thug life"
var b = 5;
var c = 10;
var x = b*c + a;

//Answer: 50thug life
// 5/5 pts



//Question 2.4
//What is the value of x?
var x = 10;
var y = 6;
x = x*y;
var z = 4;
x = x*z;

//Answer:
x=240
// 5/5 pts




//Question 3.1
//Write a sentence that uses the following variables
var firstName = "John"
var lastName = "Martinez"
var city = "Miami"

//Answer:
firstName + " " + lastName + " works in " + city
// 5/5 pts



//Question 3.2
//Write a sentence that uses the following variables
var totalPower = 32
var generator = 1
//Answer:
generator + " Generator has a total power of " + totalPower
// 5/5 pts



//Question 3.3
//What is the value of str3?

var str1 = "que bola acere";
var str2 = "sup dawg";
var str3 = str1+"is similar to"+str2+" in spanish.";

//Answer: que bola acereis similar tosup dawg in spanish.
// 5/5 pts




//Question 3.4
//Use console.log to output the statement: "Hi! My name is Slim Shady." using the following two variables:
var greeting = "Hi!";
var name = "Slim Shady";

//Answer:
console.log(greeting + " " + name + ".");
// 3/5 pts. Correct answer:
console.log(greeting + " My name is " + name + ".");



//Question 4
/*
Given three variables, money, interest, and years, write a program that displays (using console.log) the amount of money that you have after collecting the interest payments due at the end of each year. For example, if you start with $100 and the interest is 10%, then your program should output the following:
"At the end of year 1, you have $110"
"At the end of year 2, you have $121"
"At the end of year 3, you have $131.1"
...
"At the end of year [n], you have $[amount from previous year]*(1+interest)
----
Dadas tres variables, money, interest, and years, escriba un programa que muestre (utilizando console.log) la cantidad de dinero que usted tendria luego de recibir el pago de interes al final del an~o. Poe ejemplo, si usted comienza con cien dolares y la tasa de interes For example, if you start with $100 and the interest is 10%, then your program should output the following:
"Al terminar el an~o 1, usted tiene $110"
"Al terminar el an~o 2, usted tendra $121"
"Al terminar el an~o 3, usted tendra $131.1"
...
"Al terminar el an~o [n], usted tendra $[monto anterior]*(1+interes)
"
*/

//Answer:
var money = 1000;
var interest = 0.05;
var years = 30;
var stringMoneyToShow;

for(var i = 1 ; i <=12 ; i++){

	money *=i+interest;
	stringMoneyToShow = money;
	console.log( "At the end of year " + i + ", you have " + "$" + stringMoneyToShow.toFixed(2)  );
}
// 2/5 pts. Output is incorrect, but you some things correctly. (Good use of toFixed).
// One way to get the correct output is like this:
var money = 1000;
var interest = 0.05;
var years = 30;
for(var i = 1; i <= 12 ; i++){
	money *= (interest + 1);
	console.log( "At the end of year " + i + ", you have " + "$" + money.toFixed(2)  );
}
// Output:
// At the end of year 1, you have $1050.00
// At the end of year 2, you have $1102.50
// At the end of year 3, you have $1157.63
// ...




// Question 5.1
/*
Dadas tres variables, escriba un programa que muestre (en la consola) "Usted debe comprar un carro nuevo" solamente si la eddad del carro que tiene (carAge) es mayor que 10, el millaje (mileage) es mayor que 150,000, y si la marca es Kia. De otra manera, su programa debe mostrar "Espere un poco, sea frugal."

Given three variables, create a program that outputs (to the console) "You should buy a new car" only if the current car age is greater than 10, the mileage is greater than 150,000 and the brand is Kia. Otherwise, your program should output "Hold off a bit, be frugal."
*/

//Answer:

var carAge = 10;
var mileage = 150000;
var brand = "Kia";

if (  carAge > 10 && mileage > 150000 && brand=="Kia"){
  console.log("You should buy a new car");
}
else{
  console.log("Hold off a bit, be frugal.");
}
// 5/5 pts. Note: 'Kia' != 'kia' because K (uppercase) is keycode 75 and
// k (loweracse) is keycode 107. Good job keep the case the same. You could
// also do it like this:
if (carAge > 10 && mileage > 150000 && brand.toLowerCase() == "kia") {}




//Question 5.2
/*
You work for a water park. This park has 7 small pools and 5 large ones.
The engineer tells you every day which pool is working.
The accountant asked you to build a report which shows how many gallons are used per day in filling the pools, which depends on the pools that are operational. Today, every pool is operational.

Usted trabaja para un parque de agua. En este parque hay 7 piscinas pequenas y 5 grandes.
El ingeniero le reporta todo los dias de cuales piscinas estan trabajando.
La contadora le pidio que haga un reporte de cuanto galones gasta por dia, que depende en las piscinas operacionales.  Hoy toda las piscinas estan trabajando.
*/

//Answer:
var totalPools = 12
var currentPool = 1
var smallVolume = 1000
var largeVolume = 3000
var totalVolume = 0
for (var i = 1; i <= totalPools ; i++ ) {

	totalVolume += smallVolume + largeVolume;

}

console.log("The total of galon are " + totalVolume);

// 2/5 pts. Your output is incorrect, but you did some things correctly. This
// is one way to get the correct output:
var totalPools = 12
var currentPool = 1
var smallVolume = 1000
var largeVolume = 3000
var totalVolume = 0
for(currentPool; currentPool <= totalPools; currentPool++) {
    if(currentPool <= 7) {
        totalVolume += smallVolume;
    }
    else {
        totalVolume += largeVolume;
    }
}
// Output should be 22,000




// Extra Credit
// Este dia las picsinas numero 2 y 10 no trabajan,
// Repeat the same problem but assume pools 2 and 10 aren't operational.

//Answer:
var totalPools = 12
var currentPool = 1
var smallVolume = 1000
var largeVolume = 3000
var totalVolume = 0
for ( var i = 1; i <= totalPools ; i++ ) {

	if( i != 2 && i != 10){
		totalVolume += smallVolume + largeVolume;
	}

}

console.log("The total of galon are " + totalVolume);
// +2 pts. Again, your output is wrong, but you did some things correctly.
// Here is one way to get the correct output:
var totalPools = 12
var currentPool = 1
var smallVolume = 1000
var largeVolume = 3000
var totalVolume = 0
for(currentPool; currentPool <= totalPools; currentPool++) {
    if(currentPool <= 7 && currentPool != 2) {
        totalVolume += smallVolume;
    }
    else if(currentPool > 7 && currentPool != 10) {
        totalVolume += largeVolume;
    }
}
// Even better, like this:
var totalPools = 12
var currentPool = 1
var smallVolume = 1000
var largeVolume = 3000
var totalVolume = 0
for(currentPool; currentPool <= totalPools; currentPool++) {
    if(currentPool === 2 || currentPool === 10) {continue}
    // 'continue' breaks from the current iteration and continues on
    // to the next iteration
    if(currentPool <= 7) {
        totalVolume += smallVolume;
    }
    else {
        totalVolume += largeVolume;
    }
}
// Output will be 18,000





//Extra Credit
/*
The engineer knows that pools 2, 6 and 10 won't work tomorrow.
Besides, pool number 12 will be filled with half the volume in order to accommodate children.
Go ahead and build tomorrow's report today, so you can rest easy.

El ingeniero sabe que manana las picsinas 2, 6, y 10 no van a trabajar.
Ademas, la picina numero 12 la van a llenar con la mitad del volumen, para ninos pequenos.
Adelantese y haga el reporta hoy, para que manana descanse
*/

//Answer:

var totalPools = 12
var currentPool = 1
var smallVolume = 1000
var largeVolume = 3000
var totalVolume = 0

for ( var i = 1; i <= totalPools ; i++ ) {

	if( i != 2 && i!=6 && i != 10 && i!=12){
		totalVolume += smallVolume + largeVolume;
	}

	if(i == 12){
		totalVolume += (smallVolume/2) + largeVolume;
	}



}

console.log("The total of galon are " + totalVolume);

// +2 pts. You did some things correctly, but your output is incorrect.
// Here is one way to get the correct answer:
var totalPools = 12
var currentPool = 1
var smallVolume = 1000
var largeVolume = 3000
var totalVolume = 0
for(currentPool; currentPool <= totalPools; currentPool++) {
    if(currentPool === 2 || currentPool === 6 || currentPool === 10) {continue}
    if(currentPool <= 7) {
        totalVolume += smallVolume;
    }
    else if(currentPool === 12) {
        totalVolume += largeVolume / 2;
    }
    else {
        totalVolume += largeVolume;
    }
}
// Output will be 15,500
