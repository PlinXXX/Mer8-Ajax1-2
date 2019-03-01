// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require jquery_ujs
//= require activestorage
//= require turbolinks
//= require_tree .
 $(function() {
 	let tabulation = $('[class="btn btn-sm btn-primary"]')
    let card = $('.a');
 	for(let i=0;i<3;i++){
    let currentCard = card.eq(i)
    let currentTab = tabulation.eq(i)
    currentTab.click(function(){
    	card.css("display","none")
    	card.eq(i).css("display","block");
    	
    }) 
   
   }
        
 
    $('img:first').click(function(){
    	$('.drop').css("display","block")
    })
  document.getElementById("log").addEventListener("click",function(){
         $('#login').css("display","block")
  });
var $carrousel = $('#carrousel'), // on cible le bloc du carrousel
    $img = $('#carrousel img'), // on cible les images contenues dans le carrousel
    indexImg = $img.length - 1, // on définit l'index du dernier élément
    i = 0, // on initialise un compteur
    $currentImg = $img.eq(i); // enfin, on cible l'image courante, qui possède l'index i (0 pour l'instant)
$img.css('display', 'none'); // on cache les images
$currentImg.css('display', 'block'); // on affiche seulement l'image courante

//$carrousel.append('<div class="controls"> <span class="prev">Precedent</span> <span class="next">Suivant</span> </div>');


$('.next').click(function(){ // image suivante

    i++; // on incrémente le compteur

    if( i <= indexImg ){
        $img.css('display', 'none'); // on cache les images
        $currentImg = $img.eq(i); // on définit la nouvelle image
        $currentImg.css('display', 'block'); // puis on l'affiche
    }
    else{
        i = indexImg;
    }

});

$('.prev').click(function(){ // image précédente

    i--; // on décrémente le compteur, puis on réalise la même chose que pour la fonction "suivante"

    if( i >= 0 ){
        $img.css('display', 'none');
        $currentImg = $img.eq(i);
        $currentImg.css('display', 'block');
    }
    else{
        i = 0;
    }

});


function slideImg(){
    setTimeout(function(){ // on utilise une fonction anonyme
            
        if(i < indexImg){ // si le compteur est inférieur au dernier index
      i++; // on l'incrémente
  }
  else{ // sinon, on le remet à 0 (première image)
      i = 0;
  }

  $img.css('display', 'none');

  $currentImg = $img.eq(i);
  $currentImg.css('display', 'block');

  slideImg(); // on oublie pas de relancer la fonction à la fin

    }, 7000); // on définit l'intervalle à 7000 millisecondes (7s)
}

slideImg(); //
  });