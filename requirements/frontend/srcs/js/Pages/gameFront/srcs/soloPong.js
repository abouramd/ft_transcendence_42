import Pong from "./Pong.js";

let players = [];

const soloPong = () => {
  players = [];
  displayRegisterForm();
}

const startGame = () => {
  if (players.length < 2) {
    alert("you must have 2 players before starting");
    return;
  }
  document.querySelector("#content").innerHTML = ""
  const pong = new Pong(2, false, document.querySelector("#content"))
  pong.players = players;
  pong.setup()
}

const registerPlayer = () => {
  if (players.length === 2) {
    alert("you can't have more than two players, you can start the Game");
    return;
  }
  const playerNameInput = document.getElementById('playerName');
  const playerName = playerNameInput.value.trim();
  if (playerName) {
    players.push(playerName);
    updatePlayerList();
    playerNameInput.value = '';
  }
}

const updatePlayerList = () => {
  const playerList = document.getElementById('playerList');
  playerList.innerHTML = '';
  players.forEach((player, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}. ${player}`;
    li.className = "list-group-item";
    playerList.appendChild(li);
  });
}

const displayRegisterForm = () => {
  document.querySelector("#content").innerHTML = `
    <div id="registration" class="d-flex flex-column gap-2">
        <h2>Register Players</h2>
        <div class="form-floating">
            <input type="text" id="playerName" placeholder="Enter player alias" class="form-control">
            <label for="playerName">player alias</label>
        </div>
        <button class="btn btn-primary" style="width: 100%" id="registerBtn">Register</button>
        <ul class="list-group" id="playerList"></ul>
        <button class="btn btn-primary" style="width: 100%" id="startGametBtn">Start Game</button>
    </div>
    `;
  document.querySelector("#registerBtn").addEventListener("click", registerPlayer);
  document.querySelector("#startGametBtn").addEventListener("click", startGame);
}

export { soloPong }
