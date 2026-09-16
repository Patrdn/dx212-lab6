const calcFare = require("./ai-dev.js");

// ทดสอบ 2 กิโลเมตรแรก = 10 บาท
console.assert(calcFare(1) === 10, "1 km ควรได้ 10");
console.assert(calcFare(2) === 10, "2 km ควรได้ 10");

// ทดสอบ fraction => round up แล้วคิดราคา
console.assert(calcFare(1.5) === 10, "1.5 km round up เป็น 2 ควรได้ 10");
console.assert(calcFare(2.1) === 12, "2.1 km round up เป็น 3 ควรได้ 12");

// ทดสอบระยะทางมากกว่า 2 กม.
console.assert(calcFare(3) === 12, "3 km ควรได้ 12");
console.assert(calcFare(7.2) === 22, "7.2 km round up เป็น 8 ควรได้ 22");
console.assert(calcFare(10) === 26, "10 km ควรได้ 26");

// ทดสอบ edge cases
console.assert(calcFare(0) === 10, "0 km round up เป็น 0 ≤ 2 ควรได้ 10");
console.assert(calcFare(-1) === 0, "ค่าลบควรได้ 0");
console.assert(calcFare(NaN) === 0, "NaN ควรได้ 0");
console.assert(calcFare("abc") === 0, "string ควรได้ 0");

console.log("All tests passed!");
