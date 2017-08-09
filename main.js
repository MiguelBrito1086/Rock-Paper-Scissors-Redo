function randomNess(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

let throws = ['rock', 'paper', 'scissors']

let computerNumber = randomNess(0,2)

let computer = throws[computerNumber]

let vs = document.querySelector('#myDraw')

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

  // Call function that does computer move.
}

let me =
    scissors.addEventListener('click', image => {
      userClick('scissors')
    })

    rock.addEventListener('click', image => {
        let p = document.createElement('p')
        let img = document.createElement('img')

        if (rock) {
          img.src = "rock.gif"
        }

        vs.appendChild(p)
        p.appendChild(img)
    })

    paper.addEventListener('click', image => {
        let p = document.createElement('p')
        let img = document.createElement('img')

        if (paper) {
          img.src = "paper.png"
        }

        vs.appendChild(p)
        p.appendChild(img)
    })

//
// document.getElementById(computer)Math.random("rock","paper","scissors")
//
// document.getElementById(me)Math.random("rock","paper","scissors")

// let computer = "rock";
// let me = "scissors"; // Change this to test your code
let play = me.addEventListener

    if (me === "rock" && computer === "rock") {
      console.log("Looks like a tie!");
    }

    if (me === "paper" && computer === "rock") {
      console.log("I win!");
    }

    if (me === "scissors" && computer === "rock") {
      console.log("Computer wins!");
    }

    if (me === "rock" && computer === "paper") {
      console.log("Computer wins!");
    }

    if (me === "paper" && computer === "paper") {
      console.log("Looks like a tie!");
    }

    if (me === "scissors" && computer === "paper") {
      console.log("I win!");
    }

    if (me === "rock" && computer === "scissors") {
      console.log("I win!");
    }

    if (me === "paper" && computer === "scissors") {
      console.log("Computer wins!");
    }

    if (me === "scissors" && computer === "scissors") {
      console.log("Looks like a tie!");
    }
