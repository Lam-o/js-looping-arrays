var programmingLanguages = [
  "Scala",
  "Java",
  "Go",
  "Swift",
  "Cobol",
  "JavaScript",
  "Python",
  "Ruby",
  "Elm",
  "Rust",
  "C#"
];

console.log(programmingLanguages);

for (var language of programmingLanguages) {
  console.log(`I want to learn ${language}!`);
}

//use forEach() for array to make all uppercase...
//log out index starting @ 1 with uppercase element
//i.e : 1 javascript...
programmingLanguages.forEach(function (item, index) {
  console.log(`${index + 1}. ${item.toUpperCase()}`);
});

//use .filter to return a new array called updateLanguages that...
//returns languages without the letter "Y"...
var updatedLanguages = programmingLanguages.filter(function (language) {
  return language.includes("y");
});

console.log(updatedLanguages);
