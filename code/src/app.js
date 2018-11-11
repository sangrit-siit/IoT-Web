function fern(){
    $.get( "http://35.198.217.40/api/debug", function( data ) {
    $( ".result" ).html( data );
      result = data
      //alert( "Load was performed." );
    });
}

function statistic(){
    $.get( "http://35.198.217.40/api/debug", function( data ) {
    $( ".result" ).html( data );
      statistic_data = [
        {
          "plate":"XXXX",
          "count":12
        },
        {
          "plate":"YYYY",
          "count":34
        }
      ]
    });
}

function getStatisticUser(){
    $.get( "http://35.198.217.40/api/statistic/user", function( data ) {
      statisticUser_data = [data['staff'], data['visitor']]
        pie_chart()
    });
}

function getStatisticEntrance(){
    $.get( "http://35.198.217.40/api/statistic/entrance", function( data ) {
      //statisticEntrance_data = [20,45,30,10,25,50,40,15,45,30,35,10,40,25,50,20,15,22,30,16,48,12,36,50]
        statisticEntrance_data = data
      test_chart()
    });
}

function getStatisticExit(){
    $.get( "http://35.198.217.40/api/statistic/exit", function( data ) {
      //statisticExit_data = [30,50,25,12,41,23,50,39,18,3,8,26,30,30,30,17,43,23,38,50,11,30,30]
        statisticExit_data = data
      test_chart()
    });
}

function register(){
  input_plate = $("#input_plate")[0].value
  input_name = $("#input_name")[0].value
  console.log(input_name)
  console.log(input_plate)
  $.post( "http://35.198.217.40/api/register", {'plate': input_plate, 'name': input_name})
  .done(function( data ) {
    response = data
     alert("Successfully Add!");
  })

}

function getEntrance(){
     setTimeout(function(){
        $.ajax({ url: "http://35.198.217.40/api/jenny/entrance",
          success: function(data){
            entrance_data = data;
            entrance_plate = document.getElementById('entrance_plate_info')
            entrance_plate.innerText = entrance_data['plate']

            entrance_time = document.getElementById('entrance_time_info')
            entrance_time.innerText = entrance_data['time']

            entrance_position = document.getElementById('entrance_position_info')
            entrance_position.innerText = entrance_data['position']

            entrance_image = document.getElementById('entrance_image')
            entrance_image.src = 'http://35.198.217.40/'+entrance_data['image']
            console.log(entrance_data)
            getEntrance();
          }
        });
    }, 1000);
}

function getExit(){
  setTimeout(function(){
     $.ajax({ url: "http://35.198.217.40/api/jenny/exit",
       success: function(data){
         exit_data = data;
         exit_plate = document.getElementById('exit_plate_info')
         exit_plate.innerText = exit_data['plate']

         exit_time = document.getElementById('exit_time_info')
         exit_time.innerText = exit_data['time']

         exit_position = document.getElementById('exit_position_info')
         exit_position.innerText = exit_data['position']

         exit_image = document.getElementById('exit_image')
         exit_image.src = 'http://35.198.217.40/'+exit_data['image']
         console.log(exit_data)
         getExit();
       }
     });
 }, 1000);
}


function poll(){
   setTimeout(function(){
      $.ajax({ url: "http://35.198.217.40/api/debug",
        success: function(data){
          val = data;
          console.log(val)
          poll();
        }
      });
  }, 1000);
}
