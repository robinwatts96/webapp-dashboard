// Line chart
let trafficChart = document.getElementById('traffic-chart');
let trafficTime = document.getElementById('traffic-time');
let trafficTimeLinks = document.getElementById('li');

// labels
let hourlyLabel = ['01-03','04-05','06-08','09-11','12-13','14-16','17-18','19-20','21-22','23-24'];
let weeklyLabel = ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10','11-17','18-24','25-31'];
let dailyLabel = ['Mon','Tue','Wed','Thu','Fri','Sat', 'Sun'];
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

  
  //remove active class

// let remove = () =>{
//     for(let i = 0; i < trafficNavLinks.length; i++){
//         trafficNavLinks[i].classList.remove('active');
//         }
//     };
    // shorter version as above 
    let remove = ()=> {
      trafficTimeLinks.forEach(link => link.classList.remove("active"));
    }
//update chart (use className in if statement)

let updateChart = () =>{
  for(let i = 0; i < trafficTimeLinks.length; i++){
      if(trafficTimeLinks[i].className === 'active'){
          if(trafficTimeLinks[i].textContent === 'Hourly'){
              trafficData.labels = hourlyLabel;
              trafficData.datasets[0].data = hourlyTrafficData;
              trafficChart.update();
          }else if(trafficTimeLinks[i].textContent === 'Daily'){
              trafficData.labels = dailyLabel;
              trafficData.datasets[0].data = dailyTrafficData;
              trafficChart.update();
          }else if(trafficTimeLinks[i].textContent === 'Monthly'){
              trafficData.labels = monthlyLabel;
              trafficData.datasets[0].data = monthlyTrafficData;
              trafficChart.update();
          }else {
              trafficData.labels = weeklyLabel;
              trafficChart.update();
          }
      }
  }
};

// add EventListener to change chart's labels
 
trafficTime.addEventListener('click', e =>{
  let element = e.target;
  remove();
      if(element.tagName === "LI"){
          element.classList.toggle('active')
  }
  updateChart();
})

let trafficOptions = {
  aspectRatio: 2.5,
  animation:{
      duration:3000
  },
  scales:{
      yAxes: [{
          ticks:{
              beginAtZero:true
          }
      }]
  },
  legend: {
      display:false
  }
};



let trafficCanvas = new Chart(trafficChart, {
  type: 'line',
  data: trafficData,
  options: trafficOptions
});

//bar grath:daily-chart 

const dailyCanvas = document.getElementById("daily-chart");

const dailyData = {
  labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  datasets: [{
      label: '# of Hits',
      data: [75, 115, 175, 125, 225, 200, 100],
      backgroundColor: '#7477BF',
      borderWidth: 1
  }]
};

const dailyOptions = {
  scales: {
      yAxes:[{
          ticks:{
              beginAtZero: true
          }
      }]
  },
  legend: {
      display: false
  }
}

let dailyChart = new Chart(dailyCanvas, {
  type: 'bar',
  data: dailyData,
  options: dailyOptions
});

//bar-grath:mobile-users-chart
const mobileCanvas = document.getElementById('mobile-users-chart')

const mobileData = {
  labels: ["Desktop", "Tablet", "Phones"],
  datasets:[{
      label:'# of Users',
      data: [2000, 550, 500],
      borderWidth: 0,
      backgroundColor: [
          '#7477BF',
          '#78CF82',
          '#51B6C8'
      ]
  }]
};

const mobileOptions = {
  legend: {
      position: 'right',
      labels:{
          boxWidth: 20,
          fontStyle: 'bold'
      }
  }
}
let mobileChart = new Chart(mobileCanvas, {
  type: 'doughnut',
  data: mobileData,
  options: mobileOptions
});