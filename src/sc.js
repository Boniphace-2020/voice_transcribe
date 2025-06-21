function checkPalindrome() {
  const input = document.getElementById('inputText').value;
  const cleaned = input.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const reversed = cleaned.split('').reverse().join('');
  const result = document.getElementById('result');

  if (cleaned === '') {
    result.textContent = "Please enter some text.";
    result.style.color = 'orange';
  } else if (cleaned === reversed) {
    result.textContent = `"${input}" is a palindrome! ✅`;
    result.style.color = 'green';
  } else {
    result.textContent = `"${input}" is not a palindrome. ❌`;
    result.style.color = 'red';
  }
}
