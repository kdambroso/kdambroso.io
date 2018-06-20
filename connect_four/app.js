console.log('Are you ready to connect?')


$(()=> {

class Connect4 {
  constructor(selector) {
    this.rows = 6;
    this.columns = 7;
    this.selector = selector;
    this.createGrid();
    this.gameLogic();

  }
  createGrid() {
  //creates 6x7 grid (6 rows, 7 columns) gameboard with divs
    const $board = $(this.selector);
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
  } //end gameboard




// Setup Event Listeners
gameLogic(){
  const $board = $(this.selector);
//function to check row below event target for lastEmpty Cell to drop token into
  const lastEmpty = (columnNum) => {
    const cells = $(`.column[data-column='${columnNum}']`);
    console.log(cells)
    for (let i = cells.length-1; i>=0; i-- ){
      const $cell = $(cells[i]);
      if ($cell.hasClass('empty')) {
        console.log($cell)
        return $cell;
      }
    }
    return null;
    }


//Finds column and row index
  $board.on('click', '.column.empty', () => {
    // console.log('here', event.target);


    changePlayer()

    if (player1 === true) {

  //run function to check row below event target
      let columnNum= $(event.target).attr('data-column')
      let rowNum= $(event.target).attr('data-row')
      const $lastEmpty = lastEmpty(columnNum)
      console.log(columnNum, rowNum)
      // lastEmpty(columnNum)


      $lastEmpty.removeClass('empty').addClass('player1')

    } else if (player1 === false){

  //run function to check row below event target
      let columnNum= $(event.target).attr('data-column') // keep data column
      let rowNum= $(event.target).attr('data-row') // to check below +1
      const $lastEmpty = lastEmpty(columnNum)
      console.log(columnNum, rowNum)
      // lastEmpty(columnNum, rowNum)
      $lastEmpty.removeClass('empty').addClass('player2')
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



//During each turn, a player places a token in one of the columns. The token slides to the "bottom" of the column. So the first move of the game would have the token at the bottom of the column in which it is placed (row 6); if the other player then plays in the same column, that player's token would be above the other player's token (so the new token is at row 5), etc.
//


// Check for Winner:


// restart () {
//   this.createGrid();
// }
//A player wins when four tokens, from the same player, are arranged either horizontally (all on the same row),


// vertically (all in the same column),


//or diagonally (each token one column left or right, one row up or down, from another token), consecutively (no breaks).Once a player reaches a winning condition, the game should stop, and the program should show the message "Player won!"

// If the player chooses a column that is invalid or full (the column has no more empty rows), then the program should ask for a new column choice:



const connectFour = new Connect4('#connect4')















})
