// ===============Part 1 ===================

for (let i = 1; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log("FizzBuzz");
    }
    else if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}

//==================Prime Time===============
console.log("====================Part2===============")
let number = 1000;
let number_of_divisors = 0;
while (number_of_divisors == 0) {
    // if number is less than 1 then the next prime is 2
    if(number < 1)
    {
        console.log("2");
        break;
    }
    number++;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        //  not a prime number, move to the next number 
        if ((number % i) == 0){
            number_of_divisors++;
            break;
        }
    }
    // if we find a divisor, reinitialize counter and move to the next number 
    if (number_of_divisors !== 0) {
        number_of_divisors = 0;
        continue;  
    }
    else
    {
        console.log(number);
        break;
    }
}
//====================Part 3 =============================

const str ="Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";
let char = '';
let index = 0;

console.log("=========PART3================")
for (let i = 0; i < str.length; i++) {
    char = str[i];
    if (char == ",") {
        index++;    
    }
    else if ((char == "\r") || (char == "\n")) {
        console.log(cell1, cell2, cell3, cell4);
        index = 0;
        cell1 = "";
        cell2 = "";
        cell3 = "";
        cell4 = "";   
     }
     else 
     {
        if (index == 0)
        { 
           cell1 += char;

        }
         if(index == 1)
         {
           cell2 += char; 
         }
         else if (index == 2)
         {
           cell3 += char;
         }
         else if (index == 3)
         {
           cell4 += char; 
         }   
     }
}
console.log(cell1, cell2, cell3, cell4);



