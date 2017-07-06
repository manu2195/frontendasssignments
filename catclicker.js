var elem = document.getElementById('my-elem');
elem.addEventListener('click',function(){
    var counterNew= document.getElementById('counter').innerText;
    var counterLatest=Number(counterNew)+1;
    document.getElementById('counter').innerText=counterLatest;
      
},false);