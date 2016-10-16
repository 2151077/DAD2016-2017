// 2140792- Natalia Donca 
'use strict';

// Implementation:

(function(){

var selectedMode;

  var panelAutores = $('#authors-section');
	var autores = $('#authors-section').children('div');
  var jogoInicial;

  $('h3',autores.eq(0)).text('2140792');
  $('p',autores.eq(0)).text('????? Gupo ?????');
  autores.eq(1).remove();
  autores.eq(2).remove();
  autores.eq(3).remove();

	//console.log(autores.lenght);

  function processAPIResult(jogoInicial, status){
     if(jogoInicial.Response === 'False'){
    
    }else{
     $.each( jogoInicial, function( key, value ) {
      var a = '[data-column='+value.column+'][data-line='+value.line+']';
      $(a).val(value.value);
      });
    }
  }

  function callAPI(modo='easy'){
    var url = 'http://198.211.118.123:8080/board/'+modo;
    $.get(url,processAPIResult)
    .fail(function(jogoInicial, status, request) {
      
    })
    .always(function(){

    });
  }

function limparTabuleiro(){
 var cell = $('[data-column][data-line]');
  $.each( cell, function( key, value ) {
   value.value = null;
    // value = 'empty';
      })
}

  function newGame(){
    limparTabuleiro();
    var modo = $('option:selected',selectedMode).text();
    callAPI(modo);
  }

  function validarLinha(cell){
    var line = cell.getAttribute('data-line');
    var a = $('[data-line='+line+']');
    //console.log(a);
      $.each( a, function( key, value ) {     
        if(value.value == cell.value ) 
        {         
         $(value).css("background-color", "yellow");
        }
      })
  }

  function validarColumn(column){

  }

   function validarQuadrante(quadrante){
    
  }

  function actualiza(){
  $('input', '.dad-cell').on('keyup', function (e) {
    if(this.value<1 || this.value > 9){
        this.value = null; 
    }   
    validarLinha(this);
    //console.log(this.getAttribute('data-line'));
    validarColumn(this.getAttribute('data-column'));
    //console.log(this.getAttribute('data-column'));
    //validarQuadrante(); 
    e.preventDefault()
    })
  }

   $(function(){
    // DOM READY
    callAPI();
    $('#btn-new').click(newGame);
    actualiza();
    
  });


//var selector = $( ".form-control" ).selectmenu( "select-mode" );
//console.log(selector);

//$('input', '.dad-cell').on('keyup', function (e) {
               
//e.preventDefault()
//    }
})();