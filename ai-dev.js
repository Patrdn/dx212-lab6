const calcFare = (distanceKm) => {
  // ตรวจสอบระยะทาง
  if (!Number.isFinite(distanceKm) || distanceKm < 0) {
    return 0;
  }

  const roundedDistance = Math.ceil(distanceKm);

  // 2 กิโลเมตรแรกคิด 10 บาท
  if (roundedDistance <= 2) {
    return 10;
  }

  return 10 + (roundedDistance - 2) * 2;
};

console.log(calcFare(1.5));
console.log(calcFare(2));
console.log(calcFare(7.2));