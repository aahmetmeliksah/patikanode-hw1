/*
 Node.JS Komut Satırı Kullanımı
 Hepimizin Matematik derslerinden bildiği üzere Dairenin Alanı = π x r2 şeklinde hesaplanır. Node.JS Javascript çalışma ortamında yarıçap değerini konsoldan parametre olarak girerek alanı bulmaya çalışacağız. Konsol çıktısı: Yarıçapı (Yarıçap) olan dairenin alanı: (Alan) şeklinde olmalıdır.

 Kolay gelsin.
 */
"use strict";
let getCircleArea = (radius) => {
  return Math.PI * radius ** 2;
};

const arg = process.argv.slice(2);
let r = arg[0];

if (r && r > 0) {
  console.log(`Yarıçapı ${r} olan dairenin alanı: ${getCircleArea(r)}`);
}
