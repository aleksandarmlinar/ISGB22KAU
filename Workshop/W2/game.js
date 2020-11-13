'use strict';

let gameData = {

	timerId:0,
	ghostsKilled:0,
	ghostTotal:0
}	



//steg 1
//window.addEventListener('load', function(){
	$( document).ready(function(){
	console.log('ready');
	//$('body') .css('background', 'red');

	//window.addEventListener('keydown', function(event){
	$( document).on('keydown', function(event){	
		//console.log(event.key);
		if(event.key === 'e'){
			
			clearTimeout(gameData.timerId);
			console.log(gameData.ghostTotal + ' spöken dök upp och du fångade totalt ' + gameData.ghostsKilled + ' stycken.');


			
			let imgRefs = document.querySelectorAll('main img');
			for(let i= 0; i < imgRefs.length; i++){
				imgRefs.item(i).remove();
			};

		};
		
		if (event.key === 'b'){
			//console.log('b pressed');
			gameData.ghostTotal = 0;
			gameData.ghostsKilled = 0;
			
			
			gameData.timerId = setInterval(function(){

				//console.log('timer');				
				
                let imgRef = $('<img />').prependTo('body main');
                //imgRef.setAttribute('src', 'insert link here');
				imgRef.attr('src', 'https://openclipart.org/image/400px/svg_to_png/83359/fantomme.png');
				imgRef.attr('alt', 'Ghost');

                //randomize position
                let topPos = Math.round( Math.random() * ($(document).height() - imgRef.height() ) ) + 1;
				let leftPos = Math.round( Math.random() * ($(document).width() - imgRef.width() ) ) + 1;
				console.log(topPos + '  ' + leftPos);


                // css egenskaper
                imgRef.css({
                    
                    'position' : 'absolute',
                    'left' : leftPos,
                    'top' : topPos                    
                
                });
				
                //document.querySelector('main').appendChild(imgRef);
                $(imgRef).appendTo('main');
				gameData.ghostTotal++;
				//console.log(gameData.ghostTotal);
			
				
				//imgRef.addEventListener
				$(imgRef).on('mouseenter', (e)=>{
					console.log( 'Du fångade spöket!');
                    imgRef.remove();
					gameData.ghostsKilled++;
				});

			}, 1000);
		}
	});	

});
