function showCongrats() {
  document.getElementById('congratsMessage').classList.remove('hidden');
  document.querySelector('.letter').classList.add('hidden');
}

// Move the button when mouse hovers or on touch for mobile
function moveButton() {
  const noBtn = document.getElementById('noBtn');
  const letterBox = document.querySelector('.letter');

  // Get letter box boundaries
  const letterBoxRect = letterBox.getBoundingClientRect();

  // Generate random positions for the button within the letter box
  const randomX = Math.random() * (letterBoxRect.width - noBtn.clientWidth);
  const randomY = Math.random() * (letterBoxRect.height - noBtn.clientHeight);

  // Set the new position of the No button within the letter box
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}

// Attach both mouseover (desktop) and touchstart (mobile) events
const noBtn = document.getElementById('noBtn');
noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', function (e) {
  e.preventDefault();  // Prevent the touch event from clicking the button
  moveButton();
});
