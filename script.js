const button = document.getElementById('changeGreeting');
const text = document.getElementById('greeting');

button.addEventListener('click', () => {
  text.textContent = text.textContent === 'Hello, World!' ? 'Hello, FEFU!' : 'Hello, World!';
});
