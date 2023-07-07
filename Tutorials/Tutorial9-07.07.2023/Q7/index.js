const promptHandler = () => {
  let num1 = parseInt(window.prompt("Enter the first number: "));
  let num2 = parseInt(window.prompt("Enter the second number: "));

  document.write(
    `Addition: ${num1 + num2} </br>Subtraction: ${
      num1 - num2
    } </br>Multiplication: ${num1 * num2} </br>Division: ${(
      num1 / num2
    ).toFixed(2)}`
  );
};
