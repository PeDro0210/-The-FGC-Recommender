// This is just boilerplate code that I will use to fetch the questions from the back-end
export async function QuestionFetcher() {
  const response = await fetch('http://127.0.0.1:8080/GetQuestions'); //the URL is not correct, I will change it later
  const data = await response.json();
  return data.Questions;
}

// Just for testing
export function PseoudoQuestionFetcher() {
  return [
    {
        "question":"Que clase de movimientos te gustan mas en un juego de pelea?",
        "answears":["En el aire principalmente",
                    "En el suelo un poco mas pausado, centrado en el 'neutral' y el 'footsies'",
                    "En un entorno el cual me pueda mover bastante tridiemensionalmente",
                    "Rapido, donde no haya tanto tiempo para pensar y mas para reaccionar",
                    ],
        "points":[["CrossOver","2D","Anime","Fast-paced"],
        ["2D","3D","Footsies","SlowPaced"],
        ["3D","Footsies"],
        ["CrossOver","2D","Anime","Fast-paced", "AirDashers"]]
    },
    {
        "question":"Que clase de acercamiento en general de combate te gusta mas?",
        "answears":[
                "Yo y mi oponente en el suelo, ver quien da el primer paso y quien se equivoca",
                "Hacer esos combos largos, vistosos con sus finishers espectaculares",
                "Que sea un poco mas pausado, donde pueda pensar un poco mas en mis movimientos",
                "Ver esos momentos donde tenga la oportunidad de pegar y que mi oponente no pueda hacer nada"
        ],
        "points":[["2D","3D","Footsies","SlowPaced","WeaponBased"],
        ["2D","Anime","Fast-paced","AirDashers"],
        ["3D","Footsies","WeaponBased"],
        ["2D","WeaponBased"]]
    }
  ]
}

export async function GamesFetcher(categories) {
  let Query = "http://127.0.0.1:8080/GetGames/";
  for (let i = 0; i < categories.length; i++) {
    Query = Query + categories[i] +"/"
    if (i === categories.length - 1) {
      Query = Query + categories[i] 
    }
  }
  const response = await fetch(Query);
  const data = await response.json();
  return data;
}

export async function CharacterFetcher(gameID, Arhetypes) {
  let Query = "http://127.0.0.1:8080/GetGame/"+ gameID + "/"; 
  for (let i = 0; i < Arhetypes.length; i++) {
    Query = Query + Arhetypes[i]  +"/"
    if (i === Arhetypes.length - 1) {
      Query = Query + Arhetypes[i] 
    }
  }
  const response = await fetch(Query);
  const data = await response.json();
  return data;
}

