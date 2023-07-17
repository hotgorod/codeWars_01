// var a = "code";
// var b = "wa.rs";
// var name = a + b;
// console.log(name);
// ====================================
// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
// function reverseWords(str) {
//     str.split()
//   return str; // reverse those words
// }
// ===================
// const btn = document.getElementById("btn")

// btn.addEventListener('click', onClick)

// function onClick() {
//     console.log('Hello!');
// }

// const link = document.getElementById('link')
// link.addEventListener('click', onLinkClick, {
//     capture: true,
//     ones: false, подія відбувається один раз
//     passive: true заборона використання preventDefault
// })

// window.addEventListener('keydown', onKeyDown)
// =============================================

// Хрестики нулики

// const container = document.querySelector('.js-content')
// console.log(container);
// let player = 'X';
// let markup = '';
// const historyX = []; 
// const historyO = [];
// const wins = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [1, 4, 7],
//     [2, 5, 8],
//     [3, 6, 9],
//     [1, 5, 9],
//     [3, 5, 7],
// ];
// for (let i = 1; i < 10; i += 1){
//     markup +=`<div class= 'item js-item' data-id=${i}></div>`
// }

// container.innerHTML = markup

// container.addEventListener('click', onClick)
// function onClick(e) {
//     const { target } = e;
//     if (!target.classList.contains('js-item')||target.textContent) {
//         return
//     }
//     let result = false;
//     const id = Number(target.dataset.id);
//     if (player === 'X') {
//         historyX.push(id)
//         result = isWinner(historyX)
//     } else {
//         historyO.push(id)
//         result = isWinner(historyO)
//     }
//      target.textContent = player;
//     if (result) {
//         console.log(`Winner ${player}`);
//         return;
//     }
//     isWinner(historyX)
   
//     player = player === 'X'? 'O' : "X"
// }

// function isWinner(arr) {
//     return wins.some(item => item.every(id => arr.includes(id)))
// }