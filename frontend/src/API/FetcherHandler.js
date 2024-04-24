

// This is just boilerplate code that I will use to fetch the questions from the back-end
async function QuestionFetcher() {
  const response = await fetch('http://localhost:3001/questions');
  const data = await response.json();
  return data;
}

async function GamesFetcher(categories) {
  Query = "http://localhost:3001/GetGames/?categories="
  for (let i = 0; i < categories.length; i++) {
    Query = Query + categories[i] + "&" +"categories="
  }
  const response = await fetch(Query);
  const data = await response.json();
  return data;
}