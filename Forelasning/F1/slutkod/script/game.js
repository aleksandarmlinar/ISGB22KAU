/*
    <img src="https://openclipart.org/download/282132/Die6.svg" />
    <img src="https://openclipart.org/download/282131/Die5.svg" />
    <img src="https://openclipart.org/download/282130/Die4.svg" />
    <img src="https://openclipart.org/download/282129/Die3.svg" />
    <img src="https://openclipart.org/download/282128/Die2.svg" />
    <img src="https://openclipart.org/download/282127/Die1.svg" />              
*/

'use strict';

addEventListener('load', function() {

    console.log('load');

    document.addEventListener('keydown', function(e) {

        console.log('keydown', e.key);

        if(e.key === 'd') {

            console.log('d');

            let rndValue = 0;
            let mainRef = document.querySelector('main');

            const PATH = 'https://openclipart.org/download/2821';
            let imgRef = null;

            //Tillägg tabort alla bilder som finns i main innan nya tärningar slumpas!
            //-->
            let imgRefs = mainRef.querySelectorAll('img');
            for(let j=0; j < imgRefs.length; j++) {
                imgRefs.item(j).remove();
            }
            //<--

            //Summan av alla tärning för ett kast...
            let sum = 0;

            for(let i = 1; i <= 6; i++) {

                rndValue = Math.floor( Math.random() * 6) + 1;

                //Summan
                sum += rndValue;

                imgRef = document.createElement('img');
                imgRef.setAttribute('alt', 'Dice');

                console.log(rndValue);
                imgRef.setAttribute('src', PATH + (rndValue + 26) + '/Die' + rndValue + '.svg');
                imgRef.style.width = '10%';
                imgRef.style.height = '10%';
                mainRef.appendChild(imgRef);
            }

            //Summan
            console.log('Summan är', sum);

        }

    });

});