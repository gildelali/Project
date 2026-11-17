// Calculator logic
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultInput = document.getElementById("result");
const calculateBtn = document.getElementById("calculate");

calculateBtn.addEventListener("click", () => {
  // Input values are always strings, so convert them to numbers first
  const a = Number(num1Input.value);
  const b = Number(num2Input.value);

  if (
    num1Input.value.trim() === "" ||
    num2Input.value.trim() === "" ||
    Number.isNaN(a) ||
    Number.isNaN(b)
  ) {
    resultInput.value = "Please enter two valid numbers";
    return;
  }

  resultInput.value = a + b;
});
