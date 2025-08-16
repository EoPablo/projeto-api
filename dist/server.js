"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/app.ts
var import_express2 = __toESM(require("express"));

// src/routes.ts
var import_express = require("express");

// src/repositories/players-repository.ts
var database = [
  {
    "id": 1,
    "name": "Kylian Mbapp\xE9",
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
    "name": "Ousmane Demb\xE9l\xE9",
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
    "name": "D\xE9sir\xE9 Dou\xE9",
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
];
var findAllPlayers = () => __async(null, null, function* () {
  return database;
});
var findPlayerById = (id) => __async(null, null, function* () {
  return database.find((player) => player.id === id);
});
var insertPlayer = (player) => __async(null, null, function* () {
  database.push(player);
});
var deleteOnePlayer = (id) => __async(null, null, function* () {
  const index = database.findIndex((player) => player.id === id);
  if (index !== -1) {
    database.splice(index, 1);
    return true;
  }
  return false;
});
var findAndModifyPlayer = (id, statistics) => __async(null, null, function* () {
  const playerIndex = database.findIndex((player) => player.id === id);
  if (playerIndex !== -1) {
    database[playerIndex].statistics = statistics;
  }
  return database[playerIndex];
});

// src/utils/http-helper.ts
var ok = (data) => __async(null, null, function* () {
  return {
    statusCode: 200,
    body: data
  };
});
var create = () => __async(null, null, function* () {
  return {
    statusCode: 201,
    body: {
      message: "Successful"
    }
  };
});
var noContent = () => __async(null, null, function* () {
  return {
    statusCode: 204,
    body: null
  };
});
var badRequest = () => __async(null, null, function* () {
  return {
    statusCode: 400,
    body: null
  };
});

// src/services/players-service.ts
var getPlayerService = () => __async(null, null, function* () {
  const data = yield findAllPlayers();
  let response = null;
  if (data) {
    response = yield ok(data);
  } else {
    response = yield noContent();
  }
  return response;
});
var getPlayerByIdService = (id) => __async(null, null, function* () {
  const data = yield findPlayerById(id);
  let response = null;
  if (data) {
    response = yield ok(data);
  } else {
    response = yield noContent();
  }
  return response;
});
var createPlayerService = (player) => __async(null, null, function* () {
  let response = null;
  if (player) {
    response = yield insertPlayer(player);
    response = yield create();
  } else {
    response = yield badRequest();
  }
  return response;
});
var deletePlayerService = (id) => __async(null, null, function* () {
  let response = null;
  const isDeleted = yield deleteOnePlayer(id);
  if (isDeleted) {
    response = yield ok({ message: "deleted" });
  } else {
    response = yield badRequest();
  }
  return response;
});
var updatePlayerService = (id, statistics) => __async(null, null, function* () {
  const data = yield findAndModifyPlayer(id, statistics);
  let response = null;
  if (Object.keys(data).length === 0) {
    response = yield badRequest();
  } else {
    response = yield ok(data);
  }
  return response;
});

// src/controllers/players-controller.ts
var getPlayer = (req, res) => __async(null, null, function* () {
  const httpResponse = yield getPlayerService();
  res.status(httpResponse.statusCode).json(httpResponse.body);
});
var getPlayerByID = (req, res) => __async(null, null, function* () {
  const id = parseInt(req.params.id);
  const httpResponse = yield getPlayerByIdService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
});
var postPlayer = (req, res) => __async(null, null, function* () {
  const bodyValue = req.body;
  const httpResponse = yield createPlayerService(bodyValue);
  if (httpResponse) {
    res.status(httpResponse == null ? void 0 : httpResponse.statusCode).json(httpResponse == null ? void 0 : httpResponse.body);
  } else {
    const response = yield noContent();
    res.status(response.statusCode).json(response.body);
  }
  ;
});
var deletePlayer = (req, res) => __async(null, null, function* () {
  const id = parseInt(req.params.id);
  const httpResponse = yield deletePlayerService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
});
var updatePlayer = (req, res) => __async(null, null, function* () {
  const id = parseInt(req.params.id);
  const bodyValue = req.body;
  const httpResponse = yield updatePlayerService(id, bodyValue);
  res.status(httpResponse.statusCode).json(httpResponse.body);
});

// src/repositories/clubs-repository.ts
var import_promises = __toESM(require("fs/promises"));
var findAllClubs = () => __async(null, null, function* () {
  const data = yield import_promises.default.readFile("./src/data/clubs.json", "utf-8");
  const clubs = JSON.parse(data);
  return clubs;
});

// src/services/clubs-service.ts
var getClubService = () => __async(null, null, function* () {
  const data = yield findAllClubs();
  const response = ok(data);
  return response;
});

// src/controllers/clubs-controller.ts
var getClubs = (req, res) => __async(null, null, function* () {
  const response = yield getClubService();
  res.status(response.statusCode).json(response.body);
});

// src/routes.ts
var router = (0, import_express.Router)();
router.get("/players", getPlayer);
router.post("/players", postPlayer);
router.delete("/players/:id", deletePlayer);
router.patch("/players/:id", updatePlayer);
router.get("/players/:id", getPlayerByID);
router.get("/clubs", getClubs);
var routes_default = router;

// src/app.ts
var import_cors = __toESM(require("cors"));
function createApp() {
  const app2 = (0, import_express2.default)();
  app2.use(import_express2.default.json());
  app2.use("/api", routes_default);
  app2.use((0, import_cors.default)());
  return app2;
}
var app_default = createApp;

// src/server.ts
var app = app_default();
var port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`\u{1F680} Server running at port http://localhost:${port}`);
});
