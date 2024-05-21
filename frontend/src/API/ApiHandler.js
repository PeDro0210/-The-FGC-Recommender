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

async function GamelistFetcher() {
  
  const listOfGames = [
  {"name":"Street Fighter V Champion Edition","image_url":"WIP"},
  {"name":"Street Fighter VI","image_url":"WIP"}
];

}

async function CharacterListFetcher() {
  const images = [
    {
        name: "Kazuya",
        image_url: "https://media.discordapp.net/attachments/1239767599986905149/1240321229110378536/Kazuya_1.png?ex=664b68a9&is=664a1729&hm=231ce88c718d40f3961853e91ae2a618f317b1caef676b7b6426dd529fd18ad6&=&format=webp&quality=lossless"
    },
    {
        name: "Heihachi",
        image_url: "https://media.discordapp.net/attachments/1239767599986905149/1240319142851248179/Heihachi.jpg?ex=664b66b7&is=664a1537&hm=ac290febea7a43901f5e4a7c93976283182aacf352886640178b735e0a49e3e7&=&format=webp"
    }
];

}
