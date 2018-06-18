console.log('Are you ready to connect?')

$(()=> {


//Create Board

for (let row=0; row< 6 ;row++){
  const $divR = $('<div>').addClass('row')
  $('#container').append($divR)
  $divR.on('mouseenter','.column', ()=>{
   console.log('here')
 })
}
for (let column=0; column < 7 ;column++){
    const $divC = $('<div>').addClass('column')
    .attr('data-column', column)
    $('.row').append($divC)
  }

// Setup Event Listeners













})
