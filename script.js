// Baif 2- Chuyen doi tien te
console.log("Kiem tra Document", document);

function convertCurrency() {
  const amount = document.getElementById("amount").value;
  console.log("Kiem tra amount", amount);

  const currency = document.getElementById("currency");
  console.log("Kiem tra from currency", currency.value);
  const toCurrency = document.getElementById("to-currency");

  function onChange() {
    const currency = document.getElementById("currency");
    const toCurrency = document.getElementById("to-currency");
    if (currency.value == "USD") {
      toCurrency.value = "VND";
    } else {
      toCurrency.value = "USD";
    }
  }

  const result = document.getElementById("result");
  if (currency.value == "USD") {
    result.value = (amount * 23000).toLocaleString("en-GB");
  } else {
    result.value = (amount / 23000).toFixed(2);
  }
}
