test_chart  = function(){
    var ctx = document.getElementById("myChart");
    var mixedChart = new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [{
              label: 'Entrance Dataset',
              data: statisticEntrance_data,
              borderColor: "#ff999a",
              backgroundColor: "rgba(250,128,114,0.2)",
            }, {
              label: 'Exit Dataset',
              data: statisticExit_data,
              borderColor: "#87cefa",
              backgroundColor: "rgba(0,191,255,0.2)",
            }],
        labels: ['0.00 AM', '2.00 AM','3.00 AM','4.00 AM','5.00 AM','6.00 AM', '7.00 AM', '8.00 AM', '9.00 AM', '10.00 AM','11.00 AM', '12.00 PM',
                '1.00 PM','2.00 PM','3.00 PM','4.00 PM','5.00 PM','6.00 PM','7.00 PM','8.00 PM','9.00 PM','10.00 PM','11.00 PM']
      }
    });
}

pie_chart  = function(){
    var ctx3 = document.getElementById("myChart3");
    var myPieChart = new Chart(ctx3,{
    type: 'pie',
    data: {
      datasets: [{
            label: ['Staff',
                  'Visitor'],
            data: statisticUser_data,
            backgroundColor: ['#66cdaa','#FFFF7F']
          }],
      labels: ['Staffs', 'Visitors']
    }

    });
}
