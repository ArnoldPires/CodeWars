// Write a function that returns a string in which firstname is swapped with last name.
// nameShuffler('john McClane'); => "McClane john"

function nameShuffler(str) {
  const name = str.split(" ");
  const firstName = name.shift();
  const lastName = name.pop().replace("", "");
  name.unshift(lastName.charAt(0) + lastName.slice(1));
  name.push(firstName);
  return name.join(" ");
}