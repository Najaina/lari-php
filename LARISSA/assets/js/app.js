var nbr, btn, randVal, max;

max = 30;

function randomize() {
    return Math.floor(Math.random()*max+1);
}

randVal =randomize();
alert(randVal);

nbr = document.getElementById('nbr');
btn = document.getElementById('btn');
resultat = document.getElementById('resultat')


btn.onclick=function(){
    alert('Voulez-vous le resultat. Appuyez sur OK');
    var tmp = nbr.value;
    nbr.value='';
    
    if (tmp > randVal) {
        alert('trop grand');
        //resultat.innerHTML =' ngoza be';
    }
     else if (tmp < randVal){
        alert('Trop ptit');
        //resultat.innerHTML =' kely lotra';
    }
     else{
        alert('Nombre correct');
        //resultat.innerHTML ='felicitation'
    }
}