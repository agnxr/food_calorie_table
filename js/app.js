document.addEventListener('DOMContentLoaded',function(){



var parents=document.querySelectorAll('.word');

function mouseOverWord(event){

  var firstChild=this.querySelector('.meaning');
  firstChild.style.display='block';
}


function mouseOut(){
  var firstChild=this.querySelector('.meaning');
  firstChild.style.display='none';
}


for (var i = 0; i < parents.length; i++) {


  parents[i].addEventListener('mouseover', mouseOverWord );


  parents[i].addEventListener('mouseout', mouseOut );

}


});
