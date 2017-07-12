function bhariKaam(){
  console.log('i did bhari work');
}


function composer1sec(fn){
  var timeFlag = true;
  return function(){
    if(timeFlag=== true){
      fn();
      timeFlag=false;
      setTimeout(function(){
        timeFlag=true;
      }, 2000);
    }
  }
}

var composedbhariKaam = composer1sec(bhariKaam);
    while(true){
       setInterval(composedbhariKaam,10);
//       composedbhariKaam();
    }