//output predicted before running the code:
console.log(5=="5"); //true, type coercion
console.log(5==="5"); //false, no type coercion
console.log(5!="5"); //false, type coercion
console.log(5!=="5"); //true, no type coercion
console.log(1>="3"); //false, type coercion
console.log(1<="3"); //true, type coercion
console.log(1==true); //true, type coercion
console.log(1===true); //false, no type coercion
console.log(0==false); //true, type coercion
console.log(0===false); //false, no type coercion

// type coercion is the automatic or implicit conversion of values from one data type to another by javascript without any user intervention.
// type coerction happens in ==, !=, >, <, >=, <= operators but not in === and !== operators.
// === and !== are strict equality operators, meaning they check for both value and type.

//type conversion is the explicit conversion of values from one data type to another using functions like String(), Number(), Boolean(), etc.

// "==" is called loose equality operator. This operator performs type coercion if the types of the operands are different.
// "===" is called strict equality operator. This operator does not perform type coercion. It returns false if the types of the operands are different.