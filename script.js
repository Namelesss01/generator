document.getElementById('generateButton').addEventListener('click', function() {
  const min = parseInt(document.getElementById('min').value) || 1;
  const max = parseInt(document.getElementById('max').value) || 100;
  
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  const numberDisplay = document.getElementById('randomNumber');
  numberDisplay.innerText = randomNumber;

  numberDisplay.style.transform = 'scale(1.2)';
  setTimeout(() => {
    numberDisplay.style.transform = 'scale(1)';
  }, 300);
});

document.getElementById('copyButton').addEventListener('click', function() {
  const randomNumber = document.getElementById('randomNumber').innerText;
  
  const tempInput = document.createElement('input');
  document.body.appendChild(tempInput);
  tempInput.value = randomNumber;
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);

  const copyButton = document.getElementById('copyButton');
  copyButton.innerText = 'Copied!';
  setTimeout(() => {
    copyButton.innerText = 'Copy to Clipboard';
  }, 2000);
});