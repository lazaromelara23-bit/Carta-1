const correctPassword = '0110';
let input = '';

function enterDigit(digit) {
  if (input.length < 4) {
    input += digit;
  }

  const display = document.getElementById('inputDisplay');
  display.textContent = input.padEnd(4, '•');

  if (input.length === 4) {
    if (input === correctPassword) {
      document.getElementById('passwordScreen').classList.remove('active');
      document.getElementById('notepadScreen').classList.add('active');
    } else {
      alert('Contraseña incorrecta, intenta de nuevo');
      input = '';
      display.textContent = '••••';
    }
  }
}