
let menu = document.getElementById('enlaces');
let abrir = document.getElementById('open');
let botones= document.getElementsByClassName('btn-header');
let cerrado = true;



function apertura(){
  if(cerrado){
    menu.style.width='95vw';
    cerrado = false;
  }else{
    menu.style.width = '0%';
    menu.style.overflow='hidden';
    cerrado = true;
  }
}




abrir.addEventListener('click', function(){
 apertura();
});

