console.log("Form:", document);
console.log(
  "%cFirst name:",
  "color:red",
  document.getElementById("first-name").value
);
console.log(
  "%cLast name:",
  "font-size:30px;background-color:yellow",
  document.getElementById("last-name").value
);
console.info(
  "%cThông tin:",
  "color:blue",
  document.getElementById("place").value,
  "",
  document.getElementById("address").value
);
