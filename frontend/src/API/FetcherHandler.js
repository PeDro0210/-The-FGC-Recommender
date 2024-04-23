

// This is just boilerplate code that I will use to fetch the questions from the back-end
async function QuestionFetcher() {
  const response = await fetch('http://localhost:3001/questions');
  const data = await response.json();
  return data;
}