//variable named kelvin nd set it equal to 293
const kelvin = 0;

// kelvin to celsius
const celsius = kelvin - 273;
console.log(`The temperature is ${celsius} degrees celsius.`);

// kelvin to fahrenheit
let fahrenheit = celsius*(9/5) + 32;
fahrenheit=Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// kelvin to newton
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees newton.`);
