let vs = document.querySelector('#myDraw')
let comp = document.querySelector('#compDraw')
let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissors = document.getElementById('scissors')
let result = document.getElementById('VS')
let myWins = document.getElementById('myWins')
let compWins = document.getElementById('compWins')

let me
let computer
let myScore = 0;
let compScore = 0;


function randomNess(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
}

let userClick = choice => {
      me = choice
      let img = document.createElement('img')

      if (scissors) {
        img.src = `${choice}.png`
      }

      vs.appendChild(img)

      compPick();
      results();
      setUp();
    }

let compPick = () => {
      let img = document.createElement('img')

      comp.appendChild(img)


      let throws = ['rock', 'paper', 'scissors']

      let computerNumber = randomNess(0,2)

      computer = throws[computerNumber]

      img.src = `${computer}.png`
    }


scissors.addEventListener('click', image => {
  userClick('scissors')
})
rock.addEventListener('click', image => {
  userClick('rock')
})
paper.addEventListener('click', image => {
  userClick('paper')
})



let results = () => {

      if ( (me === "rock" && computer === "rock") || (me === "paper" && computer === "paper") || (me === "scissors" && computer === "scissors") ) {
        setTimeout(() => {
          result.textContent = "Tie Game!!";
          result.className += "tie";
        }, 400);
      }

      if ( (me === "paper" && computer === "rock") || (me === "rock" && computer === "scissors") || (me === "scissors" && computer === "paper") ) {
        setTimeout(() => {
          result.textContent = "You Win!!";
          myScore += 1;
          result.className += "win"; myWins.textContent = myScore;
        }, 400);
      }

      if ( (me === "scissors" && computer === "rock") || (me === "rock" && computer === "paper") || (me === "paper" && computer === "scissors") ) {
        setTimeout(() => {
          result.textContent = "Computer Wins!!";
          compScore += 1;
          result.className += "lose"; compWins.textContent = compScore;
        }, 400);
      }
  }

let setUp = () =>
  setTimeout(() =>{
    result.className = '';
    result.textContent = 'VS';
    vs.innerHTML = '';
    comp.innerHTML = '';
  }, 1600);
