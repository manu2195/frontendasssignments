function logger(i){
	console.log(i);
}
function oddMaker(fn){
	var count=0;
	return function(){
		if(count%2==1)
			fn(count);
		count++;
	}
}
var oddLogger=oddMaker(logger);
for (var i=0;i<50;i++)
	oddLogger(i);