let vs = document.querySelector('#myDraw')
let comp = document.querySelector('#compDraw')
let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissors = document.getElementById('scissors')


let userClick = choice => {
  let p = document.createElement('p')
  let img = document.createElement('img')

  if (scissors) {
    img.src = `${choice}.png`
  }

  vs.appendChild(p)
  p.appendChild(img)

  // Call function that does computer move
  function randomNess(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;

    let compPick = choice => {
      let p = document.createElement('p')
      let img = document.createElement('img')

      if (scissors) {
        img.src = `${choice}.png`
      }

      comp.appendChild(p)
      p.appendChild(img)

      let throws = ['rock', 'paper', 'scissors']

      let computerNumber = randomNess(0,2)

      let computer = throws[computerNumber]
      compPick()
    }
  }

}



let me =
    scissors.addEventListener('click', image => {
      userClick('scissors')
    })
    rock.addEventListener('click', image => {
      userClick('rock')
    })
    paper.addEventListener('click', image => {
      userClick('paper')
    })


    if ( (me === "rock" && computer === "rock") || (me === "paper" && computer === "paper") || (me === "scissors" && computer === "scissors") ) {
    // Tie Game

    }

    if ( (me === "paper" && computer === "rock") || (me === "rock" && computer === "scissors") || (me === "scissors" && computer === "paper") ) {
    // I win

    }

    if ( (me === "scissors" && computer === "rock") || (me === "rock" && computer === "paper") || (me === "paper" && computer === "scissors") ) {
    // computer wins

    }
//
// document.getElementById(computer)Math.random("rock","paper","scissors")
//
// document.getElementById(me)Math.random("rock","paper","scissors")

// let computer = "rock";
// let me = "scissors"; // Change this to test your code
// let play = me.addEventListener
//
//     if (me === "rock" && computer === "rock") {
//       console.log("Looks like a tie!");
//     }
//
//     if (me === "paper" && computer === "rock") {
//       console.log("I win!");
//     }
//
//     if (me === "scissors" && computer === "rock") {
//       console.log("Computer wins!");
//     }
//
//     if (me === "rock" && computer === "paper") {
//       console.log("Computer wins!");
//     }
//
//     if (me === "paper" && computer === "paper") {
//       console.log("Looks like a tie!");
//     }
//
//     if (me === "scissors" && computer === "paper") {
//       console.log("I win!");
//     }
//
//     if (me === "rock" && computer === "scissors") {
//       console.log("I win!");
//     }
//
//     if (me === "paper" && computer === "scissors") {
//       console.log("Computer wins!");
//     }
//
//     if (me === "scissors" && computer === "scissors") {
//       console.log("Looks like a tie!");
//     }
