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

        if(selectDifficult == 100){
            cell.classList.add('difficult1')
        }else if (selectDifficult == 81){
            cell.classList.add('difficult2')
        }else if (selectDifficult == 49){
            cell.classList.add('difficult3')
        };

        cell.addEventListener('click', function(){
            this.classList.toggle('active');

            console.log(this.innerHTML);

        }
        );

    }

    
}
);
