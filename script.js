const questions = document.querySelectorAll('.question');
questions.forEach((question) => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.classList.toggle('hidden');
        const symbol = question.querySelector('.symbol p');
        symbol.classList.toggle('rotated');
    });
});
