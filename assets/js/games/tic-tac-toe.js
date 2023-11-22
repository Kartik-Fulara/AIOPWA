window.addEventListener("DOMContentLoaded", () => {
  const tiles = Array.from(document.querySelectorAll(".tile"));
  const playerDisplay = document.querySelector(".display-player");
  const resetButton = document.querySelector("#reset");
  const announcer = document.querySelector(".announcer");

  const modal = document.querySelector("[data-modal]");

  const playerForm = document.querySelector("[data-player-form]");

  const inputFields = document.querySelectorAll("[data-player-name]");

  const displayTitle = document.querySelectorAll("[data-display]");

  const exitBtn = document.getElementById("exitImg");

  const newGameBtn = document.getElementById("newGame");

  let board = ["", "", "", "", "", "", "", "", ""];
  let currentPlayer = "X";
  let isGameActive = false;

  let player1 = "X";
  let player2 = "O";

  const PLAYERX_WON = "PLAYERX_WON";
  const PLAYERO_WON = "PLAYERO_WON";
  const TIE = "TIE";

  /*
        Indexes within the board
        [0] [1] [2]
        [3] [4] [5]
        [6] [7] [8]
    */

  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
      const winCondition = winningConditions[i];
      const a = board[winCondition[0]];
      const b = board[winCondition[1]];
      const c = board[winCondition[2]];
      if (a === "" || b === "" || c === "") {
        continue;
      }
      if (a === b && b === c) {
        roundWon = true;
        break;
      }
    }

    if (roundWon) {
      announce(currentPlayer === "X" ? PLAYERX_WON : PLAYERO_WON);
      isGameActive = false;
      return;
    }

    if (!board.includes("")) announce(TIE);
  }

  const announce = (type) => {
    switch (type) {
      case PLAYERO_WON:
        announcer.innerHTML = `Player <span class="playerO">${player2}</span> Won`;
        break;
      case PLAYERX_WON:
        announcer.innerHTML = `Player <span class="playerX">${player1}</span> Won`;
        break;
      case TIE:
        announcer.innerText = "Tie";
    }
  };

  const isValidAction = (tile) => {
    return !(tile.innerText === "X" || tile.innerText === "O");
  };

  const updateBoard = (index) => {
    board[index] = currentPlayer;
  };

  const changePlayer = () => {
    playerDisplay.classList.remove(`player${currentPlayer}`);
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    playerDisplay.innerText = currentPlayer === "X" ? player1 : player2;
    playerDisplay.classList.add(`player${currentPlayer}`);
  };

  const userAction = (tile, index) => {
    if (isValidAction(tile) && isGameActive) {
      tile.innerText = currentPlayer;
      tile.classList.add(`player${currentPlayer}`);
      updateBoard(index);
      handleResultValidation();
      changePlayer();
    }
  };

  const resetBoard = () => {
    board = ["", "", "", "", "", "", "", "", ""];
    isGameActive = true;
    announcer.innerHTML = "";

    if (currentPlayer === "O") {
      changePlayer();
    }

    tiles.forEach((tile) => {
      tile.innerText = "";
      tile.classList.remove("playerX");
      tile.classList.remove("playerO");
    });
  };

  tiles.forEach((tile, index) => {
    tile.addEventListener("click", () => userAction(tile, index));
  });

  function startGame(e) {
    e.preventDefault();
    const playerData = new FormData(this);
    const data = Object.fromEntries(playerData.entries());
    const { playerO, playerX } = data;
    if (playerX === "") {
      player1 = "X";
    } else {
      player1 = playerX;
    }

    if (playerO === "") {
      player2 = "O";
    } else {
      player2 = playerO;
    }

    isGameActive = true;

    displayTitle.forEach((title) => {
      if (title.getAttribute("data-display") === "started") {
        title.classList.remove("hide");
      }
      if (title.getAttribute("data-display") === "loading") {
        title.classList.add("hide");
      }
    });

    modal.classList.add("hide");
    exitBtn.classList.remove("hideImage");
    playerDisplay.classList.remove(`player${currentPlayer}`);
    currentPlayer = "X";
    playerDisplay.innerText = currentPlayer === "X" ? player1 : player2;
    playerDisplay.classList.add(`player${currentPlayer}`);
  }

  resetButton.addEventListener("click", resetBoard);

  playerForm.addEventListener("submit", startGame);

  inputFields.forEach((inputField) => {
    inputField.addEventListener("input", function (event) {
      const enteredText = event.target.value;
      const filteredText = enteredText.replace(/[^a-zA-Z]/g, "");
      event.target.value = filteredText;
    });
  });

  newGameBtn.addEventListener("click", () => {
    player1 = "X";
    player2 = "O";
    isGameActive = false;

    displayTitle.forEach((title) => {
      if (title.getAttribute("data-display") === "started") {
        title.classList.add("hide");
      }
      if (title.getAttribute("data-display") === "loading") {
        title.classList.remove("hide");
      }
    });

    modal.classList.remove("hide");
    announcer.innerHTML = ``;
    exitBtn.classList.add("hideImage");
    resetBoard();
  });
});
