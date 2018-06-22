console.log('Are you ready to connect?')


$(()=> {
let gameOver = false;
let openCells = 42;
let player1Wins = 0;
let player2Wins = 0;
class Connect4 {
  constructor(selector) {
    this.rows = 6;
    this.columns = 7;
    this.selector = selector;
    this.createGrid();
    this.gameLogic();
    // this.playerMove();
    this.restart();
  }
    createGrid() {
  //creates 6x7 grid (6 rows, 7 columns) gameboard with divs
      const $board = $(this.selector);
      $board.empty()

  //generates rows with for loop
    for(let row = 0; row < this.rows; row++) {
      const $row = $('<div>').addClass('row');
      for (let column = 0; column < this.columns; column++) {
  //adds class of empty and attributes for the column and row index for identification
        const $column = $('<div>').addClass('column empty')
        .attr('data-column', column)
        .attr('data-row', row)
        $row.append($column);
      }
      $board.append($row);
    }
  }
    restart() {
      $('#restart').on('click',() => {
        this.createGrid()
        gameOver = false
        openCells= 42
        $("#scoreboard").text("Player 1: " + player1Wins + "  Player 2: " + player2Wins)
      })

  } //end gameboard




// Setup Event Listeners
gameLogic(){
  const $board = $(this.selector);
//During each turn, a player places a token in one of the columns. The token slides to the "bottom" of the column.
//function to check row below event target for lastEmpty Cell to drop token into
  const lastEmpty = (columnNum) => {
    //finds all cells in the column
    const cells = $(`.column[data-column='${columnNum}']`);
    // console.log(cells)
    //checks each one for the class empty and stops when it finds on that isn't
    for (let i = cells.length-1; i>=0; i-- ){
      const $cell = $(cells[i]);
      if ($cell.hasClass('empty')) {
        // console.log($cell)
        return $cell;
      }
    }
    return null;
    }



//Finds column and row index
$board.on('click', '.column.empty', () => {
    // console.log('here', event.target);
    changePlayer()

// console.log(gameOver)
  if (gameOver === true) {


      alert('Game Over, Press Restart to play again!')

  } else if (gameOver === false) {

    if (player1 === true) {
      //if gameOver is not true

  //run function to check row below event target
      let columnNum= $(event.target).attr('data-column')
      let rowNum= $(event.target).attr('data-row')
      const $lastEmpty = lastEmpty(columnNum)
//places token
      $lastEmpty.removeClass('empty').addClass('player1')
//reduces how many available cells are left
      openCells = openCells -1
      // console.log($("[data-column= '0'][data-row='0']"));
      checkWin()

    } else if (player1 === false) {

  //run function to check row below event target
      let columnNum= $(event.target).attr('data-column') // keep data column
      let rowNum= $(event.target).attr('data-row') // to check below +1
      const $lastEmpty = lastEmpty(columnNum)

//places token
      $lastEmpty.removeClass('empty').addClass('player2')
//reduces how many available cells are left
      openCells = openCells -1

      checkWin()

      }
    }
    })
  }
}
// Game Play Logic:

//There are two players that alternate turns.
//alternate clicks between player1 and player2

  let player1 = null;
  const changePlayer = () => {
    if(player1) {
        $(event.target).hasClass('player1');
        player1  = false;
      }  else {
        player1  = true;
      }
    }

    if (player1 === true) {

      p1()
    } else if (player1 === false) {

      p2()
    }




// Check for Winner:

const checkWin = ()=> {
  // console.log(gameOver);
let currentPlayer = null;

if (player1 === true) {
  currentPlayer = 'player1'
  $("#currentPlayer").text('It\'s Player 2\'s Turn').css('color', '#3bcc64')
  $("#playerLoser").text('Player 2')
  $("#playerWinner").text('Player 1 Wins')

} else {
   currentPlayer = 'player2'
   $("#currentPlayer").text('It\'s Player 1\'s Turn').css('color', '#efe845')
   $("#playerLoser").text('Player 1')
   $("#playerWinner").text('Player 2 Wins')
}
const winCount= ()=>{
        if (currentPlayer=='player1'){
          player1Wins= player1Wins + 1
        } else if (currentPlayer=='player2'){
          player2Wins= player2Wins + 1
        }

      }
//A player wins when four tokens, from the same player, are arranged either vertically (all on the same row)
    //vertical check

      for (let x=0; x<=4; x++){
        for (let y=0; y<=6; y++) {
          let a= x+1
          let b= x+2
          let c= x+3
          if ($("[data-column= "+y+"][data-row= "+x+"]").hasClass(currentPlayer) &&
          $("[data-column= "+y+"][data-row= "+a+"]").hasClass(currentPlayer) && $("[data-column= "+y+"][data-row= "+b+"]").hasClass(currentPlayer) && $("[data-column= "+y+"][data-row= "+c+"]").hasClass(currentPlayer)) {
          openModal()
            gameOver = true
            winCount()
            console.log(currentPlayer)



          }
        }
      }

//horizontal check
        for (let x=0; x<=6; x++){
          for (let y=0; y<=3; y++) {
            let a= y+1
            let b= y+2
            let c= y+3
            if ($("[data-column= "+y+"][data-row= "+x+"]").hasClass(currentPlayer) &&
            $("[data-column= "+a+"][data-row= "+x+"]").hasClass(currentPlayer) && $("[data-column= "+b+"][data-row= "+x+"]").hasClass(currentPlayer) && $("[data-column= "+c+"][data-row= "+x+"]").hasClass(currentPlayer)) {

              openModal()
              gameOver = true
              winCount()
            }
          }
        }
        //diagonal up check
          for (let x=0; x<=4; x++){
            for (let y=3; y<=6; y++) {
              let a= y-1
              let b= y-2
              let c= y-3
              let d= x+1
              let e= x+2
              let f= x+3
              if ($("[data-column= "+y+"][data-row= "+x+"]").hasClass(currentPlayer) &&
              $("[data-column= "+a+"][data-row= "+d+"]").hasClass(currentPlayer) && $("[data-column= "+b+"][data-row= "+e+"]").hasClass(currentPlayer) && $("[data-column= "+c+"][data-row= "+f+"]").hasClass(currentPlayer)) {

                openModal()
                gameOver= true
                winCount()


              }
            }
          }
          //diagonal down check
            for (let x=0; x<=4; x++){
              for (let y=0; y<=3; y++) {
                let a= y+1
                let b= y+2
                let c= y+3
                let d= x+1
                let e= x+2
                let f= x+3
                if ($("[data-column= "+y+"][data-row= "+x+"]").hasClass(currentPlayer) &&
                $("[data-column= "+a+"][data-row= "+d+"]").hasClass(currentPlayer) && $("[data-column= "+b+"][data-row= "+e+"]").hasClass(currentPlayer) && $("[data-column= "+c+"][data-row= "+f+"]").hasClass(currentPlayer)) {

                  openModal()
                  gameOver= true
                    winCount()

              }
            }
          }
          if (openCells === 1){
              gameOver= true
          }

        }



        //Grabbing Elements

        const $modal = $('#modal');
        const $closeBtn = $('#close');

        //Event Handlers
        const openModal = () => {
          $modal.css('display', 'block');
        }

        const closeModal = () => {
          $modal.css('display', 'none');
        }

        //Event Listeners


        $closeBtn.on('click', closeModal);







const connectFour = new Connect4('#connect4')





})
