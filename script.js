const questions = document.querySelectorAll('.question');
questions.forEach((question) => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.classList.toggle('hidden');
        const symbol = question.querySelector('.symbol p');
        symbol.classList.toggle('rotated');
    });
});


// Number of buttons per view
const buttonsPerView = 4;

// Get the buttons container
const buttonsContainer = document.getElementById('buttons-container');
const totalButtons = buttonsContainer.children.length;

// Index of the first button in the current view
let currentIndex = 0;

function updateButtons() {
  // Calculate the offset to shift the button container
  const offset = currentIndex * -(200 + 40); // Width of button (200px) + margin-left (40px)
  buttonsContainer.style.transform = `translateX(${offset}px)`;
  
  // Hide or show previous and next buttons
  document.getElementById('prev').style.display = currentIndex === 0 ? 'none' : 'block';
  document.getElementById('next').style.display = currentIndex + buttonsPerView >= totalButtons ? 'none' : 'block';
}

function nextButtons() {
  // Move to the next set of buttons
  if (currentIndex + buttonsPerView < totalButtons) {
    currentIndex++;
    updateButtons();
  }
}

function prevButtons() {
  // Move to the previous set of buttons
  if (currentIndex > 0) {
    currentIndex--;
    updateButtons();
  }
}

// Initialize by hiding prev button
updateButtons();

