var height, width, color;
//grabing the input from the user
$('#sizePicker').submit(function(event){
    event.preventDefault();
    height= $('#inputHeight').val();
    width= $('#inputWeight').val();
    makeGrid(height,width);
});
//building the grid with the inputs from above
function makeGrid(x,y){
  $('tr').remove();
  for(i=1; i<= x; i++){
    $('#pixelCanvas').append('<tr id=table'+ i+'></tr>');
    for(j=1;j<= y; j++){
      $('#table'+i).append('<td></td>');
    }
  }
//grabbing the color choice from the user's selection
  $('td').click(function addColor(){
    color=$('#colorPicker').val();
//setting the cells to the color that the user has chosen
      if ($(this).attr('style')) {
        $(this).removeAttr('style')
      }else{
        $(this).attr('style','background-color:'+ color);
      }
  })

};
