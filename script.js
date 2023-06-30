const wheel = document.getElementById('wheel');
const result = document.getElementById('result');
let spinCount = 0;

function spinWheel() {
  if (spinCount === 0) {
    result.textContent = 'Try again';
    spinCount++;
  } else if (spinCount === 1) {
    const prizes = ['10% off', '20% off', 'Free shipping', '50% off'];
    const randomIndex = Math.floor(Math.random() * prizes.length);
    const prize = prizes[randomIndex];
    result.textContent = 'Congratulations! You won ' + prize;
    spinCount++;
    document.getElementById('spinBtn').disabled = true;
  }
}
