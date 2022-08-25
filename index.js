const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];

function findMatching(array, name) {
  return array.filter((str) => str.toLowerCase() === name.toLowerCase());
}

console.log(findMatching(drivers, "Bobby"));

function fuzzyMatch(drivers, str) {
  return drivers.filter(function (letters) {
    if (letters.indexOf(str) === 0) {
      return true;
    } else if (letters.indexOf(str) > 0) {
      return false;
    }
  });
}

function matchName(drivers, str) {
  return drivers.filter(function (element) {
    return element.name === str;
  });
}
