'use strict';


window.addEventListener('load', function(){
	console.log('loaded');

	let mainRef = document.querySelector('main');

	setInterval(()=>{

		let topPos = Math.floor(Math.random() * screen.height) + 1;
		let leftPos = Math.floor(Math.random() * screen.width) + 1;
		console.log('interval');
		let imgRef = document.createElement('img');
		imgRef.setAttribute('src', 'https://openclipart.org/image/400px/svg_to_png/83359/fantomme.png');
		imgRef.setAttribute('alt', 'Ghost');
		imgRef.style.position = 'absolute';
		imgRef.style.top = topPos + 'px';
		imgRef.style.left = leftPos + 'px';
		imgRef.style.width = '15%';
		imgRef.style.height = '15%';
		mainRef.appendChild(imgRef);
	}, 1000)



});
