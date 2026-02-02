/**
 * suppose:
 * chair ---> 3 cft
 * table ---> 10 cft
 * bed ---> 50 cft
 */

function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;

  const chairTotalWood = chairQuantity * perChairWood;
  const tableTotalWood = tableQuantity * perTableWood;
  const bedTotalWood = bedQuantity * perBedWood;

  const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;

  return totalWood;
}
const wood = woodQuantity(2, 1, 1);
console.log("Wood needed: ", wood);

/**
 * Shirt price ---> 500
 * Pant price ---> 300
 * Shoe price ---> 900
 * Watch price ---> 1200
 */

function shopQuantity(
  shirtQuantity,
  pantQuantity,
  shoeQuantity,
  watchQuantity,
) {
  const perShirtPrice = 500;
  const perPantPrice = 300;
  const perShoePrice = 900;
  const perWatchPrice = 1200;

  const shirtTotalPrice = perShirtPrice * shirtQuantity;
  const pantTotalPrice = perPantPrice * pantQuantity;
  const shoeTotalPrice = perShoePrice * shoeQuantity;
  const watchTotalPrice = perWatchPrice * watchQuantity;

  const totalPrice =
    shirtTotalPrice + pantTotalPrice + shoeTotalPrice + watchTotalPrice;
  return totalPrice;
}

const total = shopQuantity(1, 2, 1, 1);
console.log("Total shopping cost: ", total);
