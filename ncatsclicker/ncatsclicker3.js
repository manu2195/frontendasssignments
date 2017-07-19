var model = {
        data:[ {address: "https://i.ytimg.com/vi/3dzUgmpXPX0/hqdefault.jpg", count:0, name: "catty"},
                {address: "https://s-media-cache-ak0.pinimg.com/736x/7a/ee/6f/7aee6f1493f9a8e9da7372c410783e39--cute-cats-adorable-animals.jpg", count:0,name: "waffy"},
                {address: "http://images6.fanpop.com/image/photos/33700000/Cute-kittens-33701174-500-468.jpg", count: 0, name: "tucky"},
                {address: "https://s-media-cache-ak0.pinimg.com/736x/8c/6e/da/8c6eda27fdc4f81c4390bc9e1bafba81--super-cute-kittens-cute-kittens-and-cats.jpg",count:0, name: "mishi"},
                {address: "http://images4.fanpop.com/image/photos/16100000/Cute-Kittens-kittens-16123995-500-313.jpg",count:0, name: "micky"}],
        

    getData: {
        getCat: function (index) {
            return model.data[index];
        },

        addCat:  function (cat) {
            model.data.push(cat);
        },

        getCats: function () {
            return model.data;
        }
    },

    setData: {
        updateCount: function (index){
            model.data[index].count++;
        }
    }
};


    var octopus = {
        currentCat:null,
        cats: undefined,
    
        init: function() {
            octopus.currentCat= 0; 
            octopus.cats = model.getData.getCats();
            view.init(octopus.cats,octopus.currentCat);
        },

        onClickImageView: function(){
            model.setData.updateCount(octopus.currentCat);
            view.render.catView(octopus.cats[octopus.currentCat]);
        },

        onClickListRow: function(index) {
            octopus.currentCat = index;
            view.render.catView(octopus.cats[index]);
        }

    };
var view = {
    dom_elem: {catlist_elem:null, heading_elem:null, count_elem:null, display_region_elem:null, Dom_img:null},
    init: function (cats, currentCat) {
        view.dom_elem.catlist_elem=document.getElementById('catlist-elem');
        view.render.listView(cats);
        view.dom_elem.heading_elem=document.getElementById('heading-elem');
        view.dom_elem.count_elem=document.getElementById('count-elem');
        view.dom_elem.display_region_elem=document.getElementById('display-region-elem');
        view.dom_elem.Dom_img= document.createElement('img');
            view.dom_elem.display_region_elem.appendChild(view.dom_elem.Dom_img);
            view.dom_elem.Dom_img.addEventListener('click',function(){
                octopus.onClickImageView();
            });
        view.render.catView(cats[currentCat]);
    },

    render: {
        catView: function (cat) {
               view.dom_elem.heading_elem.textContent=cat.name;
               view.dom_elem.Dom_img.src=cat.address;
               view.dom_elem.count_elem.textContent=cat.count;
        },

        listView: function (cats) {
            for(var i = 0; i<cats.length; i++)
            {
                var elem = document.createElement('li');
                elem.textContent="Cat "+ (i+1).toString();
                elem.addEventListener('click',(function (numCopy){
                    return function (){
                    octopus.onClickListRow(numCopy);
                }

                })(i));
                view.dom_elem.catlist_elem.appendChild(elem); //todo not render optimized
            }
                      
        }
    }
};

    octopus.init();