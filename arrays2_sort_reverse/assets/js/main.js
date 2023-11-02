// ============================
//     Array-Sort-Level-1_1
// ============================
console.log("%c======Array-Sort-Level-1_1======", "color:yellowgreen");
let languages = [
  "JavaScript",
  "Python",
  "Java",
  "Ruby",
  "PHP",
  "C++",
  "CSS",
  "C#",
  "Go",
  "C",
  "TypeScript",
  "Swift",
];
languages.sort();
console.log(languages);

// ============================
//     Array-Sort-Level-1_2
// ============================
console.log("%c======Array-Sort-Level-1_2======", "color:yellowgreen");
languages.reverse();
console.log(languages);

// ============================
//     Array-Sort-Level-2_1
// ============================
console.log("%c======Array-Sort-Level-2_1======", "color:yellowgreen");
let stringArr = [
  "Sergio",
  "Hannah",
  "Regallager",
  "Reliefpfeiler",
  "Rentner",
  "Ella mag alle Bohnen",
  "han nesaH has ennaH",
  "Nie solo sein",
];
const newStringArr = stringArr.map((elt) => {
  return elt.split("").reverse().join("");
});
console.log(newStringArr);

// ============================
//     Array-Sort-Level-2_2
// ============================
console.log("%c======Array-Sort-Level-2_2======", "color:yellowgreen");
let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];

numArray2.sort((a, b) => a - b);
console.log(numArray2);
