function convertTemperature() {
  const temperature = parseFloat(document.getElementById("temperature").value);
  const unit = document.getElementById("unit").value;
  let result;

  if (isNaN(temperature)) {
    document.getElementById("result").textContent = "Please enter a valid number.";
    document.getElementById("result").style.color = "red";
    return;
  }

  if (unit === "celsius") {
    result = (temperature * 9/5) + 32; // Celsius to Fahrenheit
    document.getElementById("result").textContent = `${temperature}°C is equal to ${result.toFixed(2)}°F.`;
  } else {
    result = (temperature - 32) * 5/9; // Fahrenheit to Celsius
    document.getElementById("result").textContent = `${temperature}°F is equal to ${result.toFixed(2)}°C.`;
  }

  document.getElementById("result").style.color = "green";
}
