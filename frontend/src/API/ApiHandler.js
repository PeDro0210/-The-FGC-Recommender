// This is just boilerplate code that I will use to fetch the questions from the back-end
async function QuestionFetcher() {
  const response = await fetch('http://127.0.0.1:8080/GetQuestions'); //the URL is not correct, I will change it later
  const data = await response.json();
  return data;
}

async function GamesFetcher(categories) {
  Query = "http://127.0.0.1:8080/GetGames/"
  for (let i = 0; i < categories.length; i++) {
    Query = Query + categories[i] +"/"
    if (i == categories.length - 1) {
      Query = Query + categories [i] 
    }
  }
  const response = await fetch(Query);
  const data = await response.json();
  return data;
}

async function CharacterFetcher(gameID, Arhetypes) {
  Query = "http://127.0.0.1:8080/GetGame/"+ gameID + "/"; 
  for (let i = 0; i < Arhetypes.length; i++) {
    Query = Query + Arhetypes[i]  +"/"
    if (i == Arhetypes.length - 1) {
      Query = Query + Arhetypes[i] 
    }
  }
  const response = await fetch(Query);
  const data = await response.json();
  return data;
}

//funcion de prueba 

//llamar al game fetcher, le doy un juego y arquetipos, y devulve los personajes y archetypes en base al tiutlo del juego.
