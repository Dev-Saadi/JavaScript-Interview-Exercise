const jokebtn = document.getElementById("get_joke_btn");
const jokeLine = document.getElementById("joke");

const jokeAPI = "https://icanhazdadjoke.com/";

const getJoke = async () => {
  const res = await fetch(jokeAPI, {
    headers: {
      accept: "appication/json",
    },
  });
  const data = await res.json();

  jokeLine.innerText = data.joke;
};

getJoke();
