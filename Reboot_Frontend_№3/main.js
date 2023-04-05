function calculations (a, b, c, d) {
    console.log(`Sum of numbers (${a} + ${b} + ${c} + ${d}) = `, a + b + c + d);
    return (a + b + c + d); 
}

let result = calculations (2, 6, 8, 7);

console.log('Sum of numbers = ', result);

let result2 = Math.PI + calculations(20, 30, 40, 50)/20;

console.log('Resault2 = ', result2);

// ===============================================================
function circleLenth (r) {
    return (Math.PI * (2 * r))
};
let r = 10;
console.log(`Довжина кола з радіусом ${r} = `, circleLenth(r));
// ================================================================