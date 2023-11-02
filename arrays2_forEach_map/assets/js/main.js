// ==============================
//   Array-Iteration-Level-1_1
// ==============================
console.log("%c======Array-Iteration-Level-1_1======", "color:yellowgreen");

let getraenke = [
  "Coca-Cola",
  "Apfelsaft",
  "Pepsi",
  "Traubensaft",
  "Sprite",
  "Orangensaft",
  "Red Bull Energy Drink",
  "Fanta",
];
getraenke.sort();
const drinks1 = getraenke.forEach((elt) => {
  document.write(elt + "<br>");
});
console.log(getraenke);

// ==============================
//   Array-Iteration-Level-1_2
// ==============================
console.log("%c======Array-Iteration-Level-1_2======", "color:yellowgreen");
const drinks2 = getraenke.map((elt) => {
  return elt.toUpperCase();
});
console.log(drinks2);

// ==============================
//   Array-Iteration-Level-1_3
// ==============================
console.log("%c======Array-Iteration-Level-1_3======", "color:yellowgreen");
let array = [
  18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30,
  74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78,
];
const newArray = array.map((elt) => elt * 2);
newArray.sort((x, y) => x - y);
console.log(newArray);

// ==============================
//   Array-Iteration-Level-1_4
// ==============================
console.log("%c======Array-Iteration-Level-1_4======", "color:yellowgreen");
let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];
const celsius = fahrenheit.map((elt) => ((elt - 32) / 1.8).toFixed(0));
console.log(celsius);

// ==============================
//   Array-Iteration-Level-1_5
// ==============================
console.log("%c======Array-Iteration-Level-1_5======", "color:yellowgreen");
let checkNumber = [
  18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30,
  74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78,
];
const newCheckNumber = checkNumber.map((elt) => {
  if (elt % 3 === 0) {
    return elt + 100;
  } else {
    return elt;
  }
});
console.log(newCheckNumber);

// ==============================
//   Array-Iteration-Level-1_6
// ==============================
console.log("%c======Array-Iteration-Level-1_6======", "color:yellowgreen");
let album = [
  "holidays.jpg",
  "Restaurant.jpg",
  "desktop",
  "rooms.GIF",
  "DOGATBEACH.jpg",
];

const newAlbum = album.map((elt) => {
  if (elt.indexOf(".") === -1) {
    return "invalid";
  } else {
    return elt.split(".").splice(0, 1).join("").toLocaleLowerCase();
  }
});
console.log(newAlbum);
