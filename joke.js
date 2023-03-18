async function getJoke() {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const joke = await response.json();
    const jokeContainer = document.getElementById('joke-container');
    jokeContainer.innerHTML = `${joke.setup} ${joke.punchline}`;
  }
  