const buttonStart = document.querySelector('button');

let gameSwitch = false;
buttonStart.addEventListener('click', function(){
    gameSwitch = true;

    if (gameSwitch == true){ 
        document.querySelector('.grill').innerHTML = '';
    }


    let cell;

    for(let i = 0; i < 100; i++){

        cell = document.createElement('div');
        cell.innerHTML = (randomNumber(1, 100));
        document.querySelector('.grill').append(cell);

        cell.addEventListener('click', function(){
            this.classList.toggle('active');
            
            console.log(this.innerHTML);
        }
        );

    }

    
}
);















//-------- FUNCTIONS -------------------------------------------------

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  };