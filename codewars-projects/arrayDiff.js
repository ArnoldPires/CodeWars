function arrayDiff(pizza, burger) {
  if (pizza.length > 0 && burger.length > 0) {
    return (diff = pizza.filter((num) => !burger.includes(num)));
  } else if (burger.length == 0) {
    return pizza;
  } else {
    return pizza;
  }
}
