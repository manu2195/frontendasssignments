// var elem = document.getElementById('my-elem');
// elem.addEventListener('click',function(){
//     var counterNew= document.getElementById('counter').innerText;
//     var counterLatest=Number(counterNew)+1;
//     document.getElementById('counter').innerText=counterLatest;
      
// },false);
var index= document.querySelectorAll('a');
for (var i=0; i<index.length; i++) {
  index[i].addEventListener('click', clickFunc);
}

function clickFunc() {
  //alert(this.id); 
  // var counterNew= this.innerText;
  // var counterLatest=Number(counterNew)+1;
  // this.innerText=counterLatest;
  console.log(this.innerText);
}
//var address= ["https://i.ytimg.com/vi/3dzUgmpXPX0/hqdefault.jpg","https://s-media-cache-ak0.pinimg.com/736x/7a/ee/6f/7aee6f1493f9a8e9da7372c410783e39--cute-cats-adorable-animals.jpg","http://images6.fanpop.com/image/photos/33700000/Cute-kittens-33701174-500-468.jpg","https://s-media-cache-ak0.pinimg.com/736x/8c/6e/da/8c6eda27fdc4f81c4390bc9e1bafba81--super-cute-kittens-cute-kittens-and-cats.jpg","http://images4.fanpop.com/image/photos/16100000/Cute-Kittens-kittens-16123995-500-313.jpg"];
var catObject=[ {address: "https://i.ytimg.com/vi/3dzUgmpXPX0/hqdefault.jpg", count:0},
                {address: "https://s-media-cache-ak0.pinimg.com/736x/7a/ee/6f/7aee6f1493f9a8e9da7372c410783e39--cute-cats-adorable-animals.jpg", count:0},
                {address: "http://images6.fanpop.com/image/photos/33700000/Cute-kittens-33701174-500-468.jpg", count: 0},
                {address: "https://s-media-cache-ak0.pinimg.com/736x/8c/6e/da/8c6eda27fdc4f81c4390bc9e1bafba81--super-cute-kittens-cute-kittens-and-cats.jpg",count:0},
                {address: "http://images4.fanpop.com/image/photos/16100000/Cute-Kittens-kittens-16123995-500-313.jpg",count:0}];
for (var i = 0; i < catObject.length; i++) {

    // This is the number we're on...
    // We're creating a DOM element for the number
    var list = document.getElementById('cats');
    var entry= document.createElement('li');
    var DOM_a=document.createElement("a");
    var linkText=document.createTextNode("Cat"+(i+1).toString());
    DOM_a.appendChild(linkText);
    DOM_a.title="Cat"+(i+1).toString();
    DOM_a.href="#home";
    entry.appendChild(DOM_a);
    list.appendChild(entry);
    
    // ... and when we click, alert the value of `num`
    DOM_a.addEventListener('click', (function(numCopy) {
        return function() {

        	var Dom_title=document.getElementById('heading');
            Dom_title.textContent= "Hi I am cat "+(numCopy+1).toString();

            var DOM_img = document.createElement("img");
            //var str=
            DOM_img.src=catObject[numCopy].address;
            var Dom_div=document.getElementById('displayRegion');
            Dom_div.removeChild(Dom_div.childNodes[0]);
            Dom_div.appendChild(DOM_img);
            var Dom_count= document.getElementById('count');
            catObject[numCopy].count++;
            Dom_count.textContent="Number of clicks"+ (catObject[numCopy].count).toString();
            
        };
    })(i));

    // document.body.appendChild(elem);
};

// var list = document.getElementById('demo');
// In your event handler, create a new list element with the input value as content and append to the list with Node.appendChild [MDN]:

// var firstname = document.getElementById('firstname').value;
// var entry = document.createElement('li');
// entry.appendChild(document.createTextNode(firstname));
// list.appendChild(entry);
// var DOM_img = document.createElement("img");
// DOM_img.src = "typo3conf/ext/ori_proyectos/res/images/interes.png";

// DOM_a.appendChild(DOM_img);
// var a = document.createElement('a');
// var linkText = document.createTextNode("my title text");
// a.appendChild(linkText);
// a.title = "my title text";
// a.href = "http://example.com";
// document.body.appendChild(a);

