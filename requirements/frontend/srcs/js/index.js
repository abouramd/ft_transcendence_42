import SinglePageApp from "./SinglePageApp.js";

export default class global {
  static singlePageApp = new SinglePageApp();
}



// /* cursor effect folow */
//
//
// const cursor = document.getElementById("cursor");
//
//
// // follow cursor on mousemove
// document.addEventListener("mousemove", (e) => {
//
//   if (!cursor)
//     return;
//
//   let x = e.pageX;
//   let y = e.pageY;
//
//   cursor.style.top = y + "px";
//   cursor.style.left = x + "px";
//   cursor.style.display = "block";
// });
//
// // cursor effects when mouseout
// document.addEventListener("mouseout", () => {
//
//   if (!cursor)
//     return;
//
//   cursor.style.display = "none";
//   // console.log("mouse out");
// });

