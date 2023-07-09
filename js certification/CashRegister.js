function checkCashRegister(price, cash, cid) {
  const currencyTable = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100],
  ];
  let remainder = cash - price;
  const result = { status: "", change: [] };
  for (let index = cid.length - 1; index >= 0 && remainder > 0; index--) {
    const curentCurrency = currencyTable.filter(
      (value) => value[0] == cid[index][0]
    );
    const currencyAmount = curentCurrency[0][1];
    if (curentCurrency[0][0] === "PENNY") {
      if (remainder - cid[index][1] === 0) {
        result.status = "CLOSED";
        result.change = cid;
      } else if (remainder - cid[index][1] > 0) {
        result.status = "INSUFFICIENT_FUNDS";
        result.change = [];
      } else {
        result.status = "OPEN";
        result.change.push([curentCurrency[0][0], remainder]);
      }
    } else {
      if (remainder - currencyAmount >= 0 && cid[index][1] > 0) {
        const quotient = Math.floor(remainder / currencyAmount);
        remainder =
          (Math.round(remainder * 100) % (currencyAmount * 100)) / 100;
        if (quotient * currencyAmount <= cid[index][1]) {
          result.status = "OPEN";
          result.change.push([curentCurrency[0][0], quotient * currencyAmount]);
          cid[index][1] -= quotient * currencyAmount;
        } else {
          result.change.push([curentCurrency[0][0], cid[index][1]]);
          remainder += quotient * currencyAmount - cid[index][1];
          cid[index][1] = 0;
        }
      }
    }
  }

  console.log(result);
  return result;
}

checkCashRegister(19.5, 20, [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);
