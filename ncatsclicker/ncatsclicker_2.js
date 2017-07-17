

    var model = {
        currentCat: null,
        catObject:[ {address: "https://i.ytimg.com/vi/3dzUgmpXPX0/hqdefault.jpg", count:0, name: "catty"},
                {address: "https://s-media-cache-ak0.pinimg.com/736x/7a/ee/6f/7aee6f1493f9a8e9da7372c410783e39--cute-cats-adorable-animals.jpg", count:0,name: "waffy"},
                {address: "http://images6.fanpop.com/image/photos/33700000/Cute-kittens-33701174-500-468.jpg", count: 0, name: "tucky"},
                {address: "https://s-media-cache-ak0.pinimg.com/736x/8c/6e/da/8c6eda27fdc4f81c4390bc9e1bafba81--super-cute-kittens-cute-kittens-and-cats.jpg",count:0, name: "mishi"},
                {address: "http://images4.fanpop.com/image/photos/16100000/Cute-Kittens-kittens-16123995-500-313.jpg",count:0, name: "micky"}]
        };

    var octopus = {
    

        init: function() {
            model.currentCat= model.catObject[0];
            //model.init();
            listview.init();
            catview.init();
            adminView.init();
        },
        getCurrentCat: function(){
             return model.currentCat;
        },

        setCurrentCat: function(cat){
                model.currentCat=cat;
        },

        getAllCats: function() {
            return model.catObject;
        },

        incrementCounter: function(){
            model.currentCat.count++;
            catview.render();
        },

    };


    var listview = {
        init: function() {
            this.catlist_elem=document.getElementById('catlist-elem');
            this.render();
            
        },
        render: function(){
              
               var cats=octopus.getAllCats();
               for (var i=0;i<cats.length;i++)
               {
                //console.log("hi");
                 var elem=document.createElement('li');
                 elem.textContent= "Cat "+ (i+1).toString();
                 elem.addEventListener('click',(function(numCopy){
                    return function(){
                        octopus.setCurrentCat(cats[numCopy]);
                        catview.render();
                    }
                 })(i));
                 this.catlist_elem.appendChild(elem);
    
               };
               
            }
    };

    var catview = {
        init: function(){
            this.heading_elem=document.getElementById('heading-elem');
            this.count_elem=document.getElementById('count-elem');
            this.display_region_elem=document.getElementById('display-region-elem');
            this.Dom_img= document.createElement('img');
            this.display_region_elem.appendChild(this.Dom_img);
            this.Dom_img.addEventListener('click',function(){
                octopus.incrementCounter();
            });
            this.render();

        },
        render: function(){
            this.heading_elem.textContent=octopus.getCurrentCat().name;
            this.count_elem.textContent=octopus.getCurrentCat().count;
            this.Dom_img.src=octopus.getCurrentCat().address;

        }

    };

    var adminView={
                 init: function(){
                    console.log("hello");
                    var form_elements=document.getElementById('form-elements');
                    var admin=document.getElementById('Admin');
                    admin.addEventListener('click',function(){
                        console.log("bye");
                        htmlStr= '<div id="form-elements">New Name:<input type="text" name="nameOfCat" id="nameOfCat"><br>New Url:<input type="text" name="urlOfCat" id="urlOfCat"><br><br>  <input type="button" value="Save" id="save"></div>';
                        // htmlStr= '<div id="form-elements">New Name:'+varibaleNeme+'<input type="text" name="nameOfCat" id="nameOfCat"><br>New Url:<input type="text" name="urlOfCat" id="urlOfCat"><br><br>  <input type="button" value="Save" id="save"></div>';
                        // htmlStr= `<div id="form-elements">New Name:${variableName}<input type="text" name="nameOfCat" id="nameOfCat"><br>New Url:<input type="text" name="urlOfCat" id="urlOfCat"><br><br>  <input type="button" value="Save" id="save"></div>`;
                        // htmlStr = 'akdn \n yagdak'
                        // htmlStr = `akdn
                         //               yagdak`;
                        form_elements.innerHTML=htmlStr;
                        var saveButton=document.getElementById('save');
                        saveButton.addEventListener('click',function(){
                            adminView.render();
                        });

                    });
                 },
                 render: function(){
                    var cat=octopus.getCurrentCat();
                    cat.name=document.getElementById('nameOfCat').value;
                    cat.address=document.getElementById('urlOfCat').value;
                    catview.render();

                 }
    };

    octopus.init();
