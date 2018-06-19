console.log('Are you ready to connect?')


$(()=> {

class Connect4 {
  constructor(selector) {
    this.rows = 6;
    this.columns = 7;
    this.selector = selector;
    this.createGrid();
    this.eventListeners();
  }
  createGrid() {
    const $board = $(this.selector);
    for(let row = 0; row < this.rows; row++) {
      const $row = $('<div>').addClass('row');
      for (let column = 0; column < this.columns; column++) {
        const $column = $('<div>').addClass('column empty')
        .attr('data-column', column)
        .attr('data-row', row)
        $row.append($column);
      }
      $board.append($row);
    }
  }


  eventListeners(){
    const $board = $(this.selector);


    // $board.on('mouseover', '.column.empty', ()=> {
    $board.on('click', event, ()=> {
      // const column = $(this).data('column');
      console.log('here', event.target);
    })

  }


}



const connectFour = new Connect4('#connect4')

// Setup Event Listeners













})
