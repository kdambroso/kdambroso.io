console.log('Are you ready to connect?')


$(() => {

//Create Board
class ConnectFour {
  constuctor (rows, columns, selector) {
    this.rows = 6;
    this.columns = 7;
    this.selector = selector;
    this.createGrid();
  }
  createGrid(){
    const $board = $(this.selector);
    console.log($board);
    for (let row = 0; row < this.rows; row++) {
      const $row = $('<div>').addClass('row');
      $board.append($row);
    }
    console.log($board);
  }
}

const connect4 = new ConnectFour('#connect4')































});
