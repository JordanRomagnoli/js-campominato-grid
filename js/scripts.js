const buttonStart = document.querySelector('button');

let gameSwitch = false;
buttonStart.addEventListener('click', function(){
    let selectDifficult = parseInt(document.querySelector('select').value);
    gameSwitch = true;

    if (gameSwitch == true){ 
        document.querySelector('.grill').innerHTML = '';
    }


    for(let i = 1; i <= selectDifficult; i++){

        let cell = document.createElement('div');
        cell.innerHTML = i;
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