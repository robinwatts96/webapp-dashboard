// Line chart
let trafficChart = document.getElementById('traffic-chart');
let trafficTime = document.getElementById('traffic-time');
let trafficTimeLinks = trafficNavUl.querySelectorAll('li')

// labels
let hourlyLabel = ['01-03','04-05','06-08','09-11','12-13','14-16','17-18','19-20','21-22','23-24'];
let weeklyLabel = ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10','11-17','18-24','25-31'];
let dailyLabel = ['M','T','W','TH','F','Sat', 'Sun'];
let monthlyLabel = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

//Chart datasets
let hourlyTrafficData = [530, 650, 500, 1000, 1300, 1250, 1350, 1550, 2050, 1300, 1520, 2300];
let weeklyTrafficData = [430, 850, 550, 1030, 1600, 1260, 1350, 1550, 2050, 1800, 1420, 1300];
let dailyTrafficData = [330, 550, 650, 1230, 1200, 1300, 1120, 1350, 1850, 1800, 1120, 1100];
let monthlyTrafficData = [230, 550, 650, 1230, 1200, 1300, 1120, 1350, 1850, 1800, 1120, 2100];

// Chart Data Object
let trafficData = {
    labels: weeklyLabel,//horizontal labels
    datasets: [{
      data: weeklyTrafficData, // vertical data
      backgroundColor: 'rgba(116, 119, 191, .3 )',
      borderwidth: 1,
    }]
  };