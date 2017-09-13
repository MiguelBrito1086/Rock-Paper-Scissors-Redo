let vs = document.querySelector('#myDraw')
let comp = document.querySelector('#compDraw')
let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissors = document.getElementById('scissors')
let result = document.getElementById('VS')
let myPoints = document.getElementById('myPoints')
let compPoints = document.getElementById('compPoints')

let me
let computer


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
      let myPoints = 0;
      let compPoints = 0;
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
          result.className += "win"; myPoints.textContent += 1;
        }, 400);
      }

      if ( (me === "scissors" && computer === "rock") || (me === "rock" && computer === "paper") || (me === "paper" && computer === "scissors") ) {
        setTimeout(() => {
          result.textContent = "Computer Wins!!";
          result.className += "lose"; compPoints.textContent = (parseInt(compPoints.textContent) + 1);
        }, 400);
      }
      console.log(typeof parseInt(compPoints.textContent));
  }

let setUp = () =>
  setTimeout(() =>{
    result.className = '';
    result.textContent = 'VS';
    vs.innerHTML = '';
    comp.innerHTML = '';
  }, 1600);
