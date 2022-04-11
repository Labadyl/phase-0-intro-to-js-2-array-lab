const cats = ["Milo","Otis","Garfield"];
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
  function destructivelyAppendCat() {
      cats.push("Ralph")
  }
  function destructivelyPrependCat() {
      cats.unshift("Bob")
  }
  function destructivelyRemoveLastCat() {
      cats.pop("Garfield")
  }
  function destructivelyRemoveFirstCat() {
      cats.shift("Milo")
  }
  function appendCat(Broom) {
      return[...cats, Broom]
  }
  function prependCat(Arnold) {
      return[Arnold,...cats]
  }
  function removeLastCat() {
    const newRemoveLastCatArray = cats.slice(0, cats.length -1);
    return newRemoveLastCatArray;
  }
  function removeFirstCat() {
      const newRemoveFirstCat = cats.slice(1)
      return newRemoveFirstCat;
  }