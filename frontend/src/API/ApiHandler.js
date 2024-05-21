

// This is just boilerplate code that I will use to fetch the questions from the back-end
async function QuestionFetcher() {
  const response = await fetch('http://localhost:3001/questions'); //the URL is not correct, I will change it later
  const data = await response.json();
  return data.questions;
}

async function GamesFetcher(categories) {
  Query = "http://localhost:3001/GetGames/?categories=" //the URL is not correct, I will change it later
  for (let i = 0; i < categories.length; i++) {
    Query = Query + categories[i] + "&" +"categories="
  }
  const response = await fetch(Query);
  const data = await response.json();
  return data;
}

async function GameFetcher(gameID, Arhetypes) {
  Query = "http://localhost:3001/GetGame/?game_name=" + gameID + "&archetype="; //the URL is not correct, I will change it later
  for (let i = 0; i < Arhetypes.length; i++) {
    Query = Query + Arhetypes[i] + "&" +"archetype="
  }
  const response = await fetch(Query);
  const data = await response.json();
  return data;
}