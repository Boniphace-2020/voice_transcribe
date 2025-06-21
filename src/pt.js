function checkAnagram() {
  const word1 = document.getElementById("word1").value;
  const word2 = document.getElementById("word2").value;

  // Function to format and sort the string
  const formatString = (str) => str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');

  if (formatString(word1) === formatString(word2)) {
    document.getElementById("result").textContent = `"${word1}" and "${word2}" are anagrams!`;
    document.getElementById("result").style.color = "green";
  } else {
    document.getElementById("result").textContent = `"${word1}" and "${word2}" are not anagrams.`;
    document.getElementById("result").style.color = "red";
  }
}
