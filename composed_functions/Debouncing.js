function save(){
  console.log("saved");
}

function autoSaveAfterSomeTime(fn){
  var timeFlag=false;
  var inDebounce;
  return function(){
    if(timeFlag===false)
    {clearTimeout(inDebounce);}
    inDebounce=setTimeout(function(){timeFlag=true; fn();},5000);
    
  }

}

var debouncedSave = autoSaveAfterSomeTime(save);
var timesRun=0;
var interval= setInterval(function(){
  debouncedSave();
  console.log("iteration number "+ timesRun);
  timesRun++;
  if(timesRun===5)
    clearInterval(interval);
},1000);
