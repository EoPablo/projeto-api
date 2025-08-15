import { PlayerModel } from "../models/player-model";
import { StatisticsPlayerModel } from "../models/statistics-model";


const database: PlayerModel[] = [
  {
    "id": 1,
    "name": "Kylian Mbappé",
    "club": "Real Madrid",
    "nationality": "France",
    "position": "Forward",
    "statistics": {
      "Overall": 92,
      "Pace": 95,
      "Shooting": 90,
      "Passing": 85,
      "Dribbling": 92,
      "Defending": 40,
      "Physical": 85
    }
  },
  {
    "id": 2,
    "name": "Ousmane Dembélé",
    "club": "Paris Saint-Germain",
    "nationality": "France",
    "position": "Forward",
    "statistics": {
      "Overall": 90,
      "Pace": 93,
      "Shooting": 88,
      "Passing": 86,
      "Dribbling": 90,
      "Defending": 50,
      "Physical": 80
    }
  },
  {
    "id": 3,
    "name": "Désiré Doué",
    "club": "Paris Saint-Germain",
    "nationality": "France",
    "position": "Midfielder",
    "statistics": {
      "Overall": 85,
      "Pace": 88,
      "Shooting": 83,
      "Passing": 87,
      "Dribbling": 88,
      "Defending": 65,
      "Physical": 78
    }
  },
  {
    "id": 4,
    "name": "Lamine Yamal",
    "club": "Barcelona",
    "nationality": "Spain",
    "position": "Forward",
    "statistics": {
      "Overall": 88,
      "Pace": 94,
      "Shooting": 84,
      "Passing": 86,
      "Dribbling": 90,
      "Defending": 50,
      "Physical": 70
    }
  },
  {
    "id": 5,
    "name": "Raphinha",
    "club": "Barcelona",
    "nationality": "Brazil",
    "position": "Forward",
    "statistics": {
      "Overall": 87,
      "Pace": 90,
      "Shooting": 88,
      "Passing": 85,
      "Dribbling": 89,
      "Defending": 55,
      "Physical": 75
    }
  },
  {
    "id": 6,
    "name": "Serhou Guirassy",
    "club": "Borussia Dortmund",
    "nationality": "Guinea",
    "position": "Forward",
    "statistics": {
      "Overall": 86,
      "Pace": 80,
      "Shooting": 89,
      "Passing": 75,
      "Dribbling": 80,
      "Defending": 45,
      "Physical": 85
    }
  },
  {
    "id": 7,
    "name": "Achraf Hakimi",
    "club": "Paris Saint-Germain",
    "nationality": "Morocco",
    "position": "Defender",
    "statistics": {
      "Overall": 89,
      "Pace": 94,
      "Shooting": 75,
      "Passing": 80,
      "Dribbling": 85,
      "Defending": 80,
      "Physical": 82
    }
  },
  {
    "id": 8,
    "name": "Marquinhos",
    "club": "Paris Saint-Germain",
    "nationality": "Brazil",
    "position": "Defender",
    "statistics": {
      "Overall": 90,
      "Pace": 80,
      "Shooting": 60,
      "Passing": 78,
      "Dribbling": 75,
      "Defending": 90,
      "Physical": 85
    }
  },
  {
    "id": 9,
    "name": "Alessandro Bastoni",
    "club": "Inter Milan",
    "nationality": "Italy",
    "position": "Defender",
    "statistics": {
      "Overall": 88,
      "Pace": 78,
      "Shooting": 60,
      "Passing": 80,
      "Dribbling": 75,
      "Defending": 88,
      "Physical": 80
    }
  },
  {
    "id": 10,
    "name": "Nuno Mendes",
    "club": "Paris Saint-Germain",
    "nationality": "Portugal",
    "position": "Defender",
    "statistics": {
      "Overall": 87,
      "Pace": 92,
      "Shooting": 70,
      "Passing": 80,
      "Dribbling": 85,
      "Defending": 82,
      "Physical": 78
    }
  },
  {
    "id": 11,
    "name": "Vitinha",
    "club": "Paris Saint-Germain",
    "nationality": "Portugal",
    "position": "Midfielder",
    "statistics": {
      "Overall": 86,
      "Pace": 78,
      "Shooting": 82,
      "Passing": 88,
      "Dribbling": 85,
      "Defending": 80,
      "Physical": 75
    }
  },
  {
    "id": 12,
    "name": "Declan Rice",
    "club": "Arsenal",
    "nationality": "England",
    "position": "Midfielder",
    "statistics": {
      "Overall": 88,
      "Pace": 76,
      "Shooting": 75,
      "Passing": 85,
      "Dribbling": 80,
      "Defending": 88,
      "Physical": 88
    }
  },
  {
    "id": 13,
    "name": "Gianluigi Donnarumma",
    "club": "Paris Saint-Germain",
    "nationality": "Italy",
    "position": "Goalkeeper",
    "statistics": {
      "Overall": 90,
      "Pace": 50,
      "Shooting": 40,
      "Passing": 70,
      "Dribbling": 50,
      "Defending": 85,
      "Physical": 88
    }
  },
  {
    "id": 14,
    "name": "Trent Alexander-Arnold",
    "club": "Real Madrid",
    "nationality": "England",
    "position": "Defender",
    "statistics": {
      "Overall": 88,
      "Pace": 75,
      "Shooting": 70,
      "Passing": 93,
      "Dribbling": 80,
      "Defending": 82,
      "Physical": 78
    }
  },
  {
    "id": 15,
    "name": "Erling Haaland",
    "club": "Manchester City",
    "nationality": "Norway",
    "position": "Forward",
    "statistics": {
      "Overall": 91,
      "Pace": 88,
      "Shooting": 92,
      "Passing": 75,
      "Dribbling": 80,
      "Defending": 45,
      "Physical": 92
    }
  },
  {
    "id": 16,
    "name": "Cristiano Ronaldo",
    "club": "Retired",
    "nationality": "Portugal",
    "position": "Forward",
    "statistics": {
      "Overall": 93,
      "Pace": 91,
      "Shooting": 94,
      "Passing": 82,
      "Dribbling": 88,
      "Defending": 38,
      "Physical": 86
    }
  },
  {
    "id": 17,
    "name": "Lionel Messi",
    "club": "Retired",
    "nationality": "Argentina",
    "position": "Forward",
    "statistics": {
      "Overall": 94,
      "Pace": 88,
      "Shooting": 92,
      "Passing": 91,
      "Dribbling": 96,
      "Defending": 35,
      "Physical": 75
    }
  },
  {
    "id": 18,
    "name": "David Beckham",
    "club": "Retired",
    "nationality": "England",
    "position": "Midfielder",
    "statistics": {
      "Overall": 85,
      "Pace": 76,
      "Shooting": 82,
      "Passing": 90,
      "Dribbling": 84,
      "Defending": 70,
      "Physical": 72
    }
  },
  {
    "id": 19,
    "name": "Zinedine Zidane",
    "club": "Retired",
    "nationality": "France",
    "position": "Midfielder",
    "statistics": {
      "Overall": 94,
      "Pace": 85,
      "Shooting": 89,
      "Passing": 95,
      "Dribbling": 94,
      "Defending": 72,
      "Physical": 84
    }
  },
  {
    "id": 20,
    "name": "Ronaldinho",
    "club": "Retired",
    "nationality": "Brazil",
    "position": "Midfielder",
    "statistics": {
      "Overall": 93,
      "Pace": 91,
      "Shooting": 88,
      "Passing": 90,
      "Dribbling": 95,
      "Defending": 50,
      "Physical": 78
    }
  }
]


export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return database;
};

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
  return database.find( player => player.id === id);
};

export const insertPlayer = async (player: PlayerModel) => {
  database.push(player)
}

export const deleteOnePlayer = async (id: number) => {
  const index = database.findIndex(player => player.id === id);

  if(index !== -1){
    database.splice(index, 1);
    return true;
  }

  return false;
};

export const findAndModifyPlayer = async (id: number, statistics: StatisticsPlayerModel): Promise<PlayerModel> => {
  // find player
  const playerIndex = database.findIndex(player => player.id === id);
  if(playerIndex !== -1){
    database[playerIndex].statistics = statistics;
  }

  return database[playerIndex];
}