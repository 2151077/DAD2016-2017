// 2140792- Natalia Donca 
'use strict';

// Implementation:

(function(){

var selectedMode = $('');

  var panelAutores = $('#authors-section');
	var autores = $('#authors-section').children('div');
  var celulas = $('.dad-cell');

 // console.log(celulas);

  var url = 'http://198.211.118.123:8080/board/easy';
    //url +=encodeURI(searchText);
     $.get(url,processAPIResult);

  $('h3',autores.eq(0)).text('2140792');
  $('p',autores.eq(0)).text('????? Gupo ?????');
  autores.eq(1).remove();
  autores.eq(2).remove();
  autores.eq(3).remove();

	console.log(autores.lenght);

  function processAPIResult(result, status){
    var data = result;
    console.log(data);
  }

  
    var url = 'http://198.211.118.123:8080/board/easy';
    //url +=encodeURI(searchText);
     $.get(url,processAPIResult);
    



})();