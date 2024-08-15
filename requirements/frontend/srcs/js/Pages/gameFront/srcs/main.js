import { genElem } from "./utils.js";
import { duoPong } from "./duoPong.js";
import { quadPong } from "./quadPong.js";
import { soloPong } from "./soloPong.js";
import { localTournament } from "./localTournament.js";


const gameModeSelector = () => {
    const gameModeSelector = genElem("div", null,{id: "gameModeSelector", class: "d-flex flex-column gap-3"})
    gameModeSelector.append(
        genElem("div", "solo Pong", {id: "solo-pong", class: "game-mode btn btn-primary"}),
        genElem("div", "duo Pong", {id: "duo-pong", class: "game-mode btn btn-primary"}),
        genElem("div", "quad Pong", {id: "quad-pong", class: "game-mode btn btn-primary"}),
        genElem("div", "Pong tournament", {id: "pong-local-tournament", class: "game-mode btn btn-primary"}),
    )
    document.querySelector("#content").append(gameModeSelector)
    document.querySelector("#solo-pong").addEventListener("click", soloPong)
    document.querySelector("#duo-pong").addEventListener("click", duoPong)
    document.querySelector("#quad-pong").addEventListener("click", quadPong)
    document.querySelector("#pong-local-tournament").addEventListener("click", localTournament)

}

export default gameModeSelector;