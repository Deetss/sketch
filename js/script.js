var divNum = 16;
function makeDivs(divNum){
  for (var i = 1; i <= (divNum * divNum); i++){
    $('.wrapper').append('<div>');
  }
};
function makeGrid(){
  $('.wrapper>div').addClass('grid');
  adjGrid = (300/divNum)+"px";
  $('.grid').css("width", adjGrid.toString());
  $('.grid').css("height", adjGrid.toString());
};

function clearGrid(){
  $('.grid').css('background-color','white');
  /*var setDivNum = prompt("Please enter a new grid size!(Current "+ divNum +")",divNum);
  divNum = setDivNum;
  $('.grid').remove();
  makeDivs(divNum);
  makeGrid();
  $('.grid').mouseenter(function(){
    $(this).css('background-color','black');
  });*/
};

function setGrid(){
  $('.grid').css('background-color','white');
  var setDivNum = prompt("Please enter a new grid size!(Current "+ divNum +")",divNum);
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
