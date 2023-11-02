// ============================
//    lvl_1_8 Arrays slice()
// ============================
console.log("%c ======lvl_1_8 Arrays slice()======", "color:yellowgreen");
const lieblingsReiseZiel = [
  "Schweden",
  "Polen",
  "Italien",
  "Norwegen",
  "Griechenland",
];
console.log(lieblingsReiseZiel);
const newLieblingsReiseZiel = lieblingsReiseZiel.slice(1, 3);
console.log(newLieblingsReiseZiel);

// ===================================
//   lvl_1_10 Arrays/String split()
// ===================================
console.log(
  "%c ======lvl_1_10 Arrays/String split()======",
  "color:yellowgreen"
);
const text =
  "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards.";
const textArr1 = text.split(".");
console.log(textArr1);
const textArr2 = text.split(" ");
console.log(textArr2);
const textArr3 = text.split("");
console.log(textArr3);
