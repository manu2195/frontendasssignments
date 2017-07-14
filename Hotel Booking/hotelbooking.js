var model = {

    currentHotel: null,
	hotelObject: [{type : "Normal", cost : 1000, count_of_rooms: 0},{type : "Deluxe", cost : 1500, count_of_rooms : 0}, {type: "Prime", cost : 2000, count_of_rooms: 0},{type : "Royal", cost : 3000, count_of_rooms : 0} ],
     total_cost: 0
}

var octopus = {
	init : function () {
		  model.currentHotel=model.hotelObject[0];
          tableView.init();
	},
    getCurrentHotel: function(){
             return model.currentHotel;
        },

    setCurrentHotel: function(hotel){
                model.currentHotel=hotel;
        },

	getAllHotelObjects : function () {
		return model.hotelObject;
	},

	setTotalCost : function (cost) {
      model.total_cost=cost;
	},

	getTotalCost : function () {
      return model.total_cost;
	}

}

var tableView = {
	init : function ()  {
            this.hotel_table_elem=document.getElementById('hotel-table-elem');
            var hotel_table_row_elem= document.createElement('tr');
            hotel_table_row_elem.id='tr'+(0+1).toString();
            this.hotel_table_elem.appendChild(hotel_table_row_elem);
            var column=document.createElement('th');
            column.textContent="Hotel Type";
            hotel_table_row_elem.appendChild(column);
            column=document.createElement('th');
            column.textContent="Cost of one room";
            hotel_table_row_elem.appendChild(column);
            column=document.createElement('th');
            column.textContent="Number of rooms";
            hotel_table_row_elem.appendChild(column);
            column.textContent="Total Cost";
            hotel_table_row_elem.appendChild(column);

            this.render();
            hotel_table_row_elem= document.createElement('tr');
            this.hotel_table_elem.appendChild(hotel_table_row_elem);

            column=document.createElement('th');
            column.textContent="Grand Total";
            hotel_table_row_elem.appendChild(column);
            column=document.createElement('th');
            column.id= "grand-total";
            column.textContent= "0";
            hotel_table_row_elem.appendChild(column);
            


	},

	render : function () {
      
      var hotel= octopus.getAllHotelObjects();
      for (var i = 1; i <= hotel.length; i++)
      {
      	  var hotel_table_row_elem = document.createElement('tr');
      	  hotel_table_row_elem.id='tr' + (i+1).toString();
      	  this.hotel_table_elem.appendChild(hotel_table_row_elem);
          this.hotel_type_render(hotel[i-1],i);
          this.cost_of_one_room_render(hotel[i-1],i);
          this.number_of_rooms_render(hotel[i-1],i);
          this.cost_of_multiple_rooms_render(hotel[i-1],i);


      } 
	},

	hotel_type_render: function (hotelObj,i) {
        var hotel_table_row_elem=document.getElementById('tr'+ (i+1).toString());
        var column= document.createElement('td');
        column.textContent= hotelObj.type;
        hotel_table_row_elem.appendChild(column);

	},

	cost_of_one_room_render : function (hotelObj,i){
       var hotel_table_row_elem = document.getElementById('tr'+ (i+1).toString());
	   var column = document.createElement('td');
	   column.textContent=hotelObj.cost;
	   hotel_table_row_elem.appendChild(column);

	},

	number_of_rooms_render: function (hotelObj,i) {
	   var hotel_table_row_elem = document.getElementById('tr'+ (i+1).toString());
	   var column = document.createElement('td');
	   hotel_table_row_elem.appendChild(column);
	   var div_counter = document.createElement('div');
	   div_counter.id='counter';
	   column.appendChild(div_counter);
	   var div_button_group = document.createElement('div');
	   column.appendChild(div_button_group);
	   var button_add = document.createElement('button');
	   button_add.id='add';
	   button_add.textContent="+";
	   var button_reset = document.createElement('button');
	   button_reset.id='reset';
	   button_reset.textContent= "Reset"
	   div_button_group.appendChild(button_add);
	   div_button_group.appendChild(button_reset)
	   div_counter.textContent= hotelObj.count_of_rooms.toString();


       button_add.addEventListener('click', (function (hotelObjCopy,iCopy) {
       	return function (){
       		      octopus.setCurrentHotel(hotelObjCopy);
       		      octopus.getCurrentHotel().count_of_rooms++;
       		      var cost= octopus.getTotalCost();
       		      cost=cost+octopus.getCurrentHotel().cost;
       		      octopus.setTotalCost(cost);
       		      div_counter.textContent=octopus.getCurrentHotel().count_of_rooms.toString();
                  tableView.cost_of_multiple_rooms_render_2(hotelObjCopy,iCopy);
                  var grand_total= document.getElementById('grand-total');
                  grand_total.textContent=octopus.getTotalCost();


       	};
       })(hotelObj,i));

       
       button_reset.addEventListener('click', (function (hotelObjCopy,iCopy) {
       	return function (){
       		      octopus.setCurrentHotel(hotelObjCopy);
       		      var cost= octopus.getTotalCost()-(octopus.getCurrentHotel().cost*octopus.getCurrentHotel().count_of_rooms);
       		      octopus.getCurrentHotel().count_of_rooms=0;
       		      octopus.setTotalCost(cost);
       		      div_counter.textContent=octopus.getCurrentHotel().count_of_rooms.toString();
                  tableView.cost_of_multiple_rooms_render_2(hotelObjCopy,iCopy); 
                  var grand_total= document.getElementById('grand-total');
                  grand_total.textContent=octopus.getTotalCost();

       	};
       })(hotelObj,i));
       

	},

	cost_of_multiple_rooms_render: function (hotelObj,i) {
		var hotel_table_row_elem = document.getElementById('tr'+ (i+1).toString());
	   var column = document.createElement('td');
	   column.textContent= "0";

	   hotel_table_row_elem.appendChild(column);
	    
	},

	cost_of_multiple_rooms_render_2: function (hotelObj,i){
		var nodes = document.getElementById('tr' + (i+1).toString()).childNodes;
        var column=nodes[nodes.length-1];
		column.textContent = (hotelObj.count_of_rooms * hotelObj.cost).toString();

	},

}
octopus.init();
