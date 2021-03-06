var divNum = 16;
function makeDivs(divNum){
  for (var i = 1; i <= (divNum * divNum); i++){
    $('#box').append('<div>');
  }
};
function makeGrid(){
  $('#box>div').addClass('grid');
  adjGrid = (500/divNum)+"px";
  $('.grid').css("width", adjGrid.toString());
  $('.grid').css("height", adjGrid.toString());
};

function clearGrid(){
  $('.grid').css('background-color','white');
};

function setGrid(){
  $('.grid').css('background-color','white');
  var setDivNum = prompt("Please enter a new grid size! 1- 100(Current "+ divNum +")",divNum);
  while (setDivNum>100|setDivNum<=0) {
    setDivNum = prompt("Please enter a valid grid size! 1- 100(Current "+ divNum +")",divNum);
  }
  divNum = setDivNum;
  $('.grid').remove();
  makeDivs(divNum);
  makeGrid();
  $('.grid').mouseenter(function(){
    $(this).css('background-color','black');
    });
};
function toggleRainbow(){
  $('.grid').mouseenter(function(){
      var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
      $(this).css('background-color', hue);
    });
};

$(document).ready(function(){
    makeDivs(divNum);
    makeGrid();
    $('.grid').mouseenter(function(){
      $(this).css('background-color','black');
      });
    $('button').click(function(){
      var id = $(this).attr('id');
      if (id === 'black'){
        console.log('black is selected');
        $('.grid').mouseenter(function(){
          $(this).css('background-color',id);
          });
      }
      else if(id === 'red'){
        console.log('red is selected');
        $('.grid').mouseenter(function(){
          $(this).css('background-color',id);
          });
      }
      else if(id === 'blue'){
        console.log('blue is selected');
        $('.grid').mouseenter(function(){
          $(this).css('background-color',id);
          });
      }
      else if(id === 'green'){
        console.log('green is selected');
        $('.grid').mouseenter(function(){
          $(this).css('background-color',id);
          });
      }
    });
  });
