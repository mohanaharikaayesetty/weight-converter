const input = document.getElementById("pounds");
const result = document.getElementById("result");
let timeout;

input.addEventListener("input", () => {
  clearTimeout(timeout); // Clear old timeout

  const pounds = parseFloat(input.value);
  if (!isNaN(pounds)) {
    const kilograms = (pounds * 0.453592).toFixed(2);
    result.textContent = `Your weight in kg is: ${kilograms}`;
  } else {
    result.textContent = "Your weight in kg is:";
  }

  // Clear the input and result after 10 seconds
  timeout = setTimeout(() => {
    input.value = "";
    result.textContent = "Your weight in kg is:";
  }, 10000);
});
