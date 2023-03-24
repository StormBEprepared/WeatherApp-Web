
function EnterEventHandler(){
  var input = document.getElementById("InputCity");
  input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("checkWeatherForCity").click();
    }
  });
}


function sendApiGetReq(){
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  const city = document.getElementById("InputCity").value;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=30ad8b12cff1d96e78b93a835665538e`, requestOptions)
    .then(response => response.json())
    .then(json => {

      document.getElementById("Temperature").innerHTML=`Temperature: ${parseInt(json.main.temp)-272}<span>°C</span>`;//-272 as the json.main.temp is in kelvin
      document.getElementById("City").innerHTML=`City: ${json.name}`;
      document.getElementById("Main").innerHTML=`State: ${json.weather[0].main}`;
      document.getElementById("Description").innerHTML=`Details: ${json.weather[0].description}`;
      document.getElementById("Country").innerHTML=`Country: ${json.sys.country}`;

      const now = new Date(); // Get the current date and time
      const hours = now.getHours(); // Get the current hour (0-23)
      const image = document.querySelector('.weather-box img');
      switch(json.weather[0].main){
        case 'Clear':
          if (hours >=22) {
            image.src = 'images/nightClear.png';
          } else {
            image.src = 'images/clear.png';
          }
          break;
        case 'Rain':
          image.src = 'images/rain.png';
          break;
        case 'Snow':
          image.src = 'images/snow.png';
          break;
        case 'Clouds':
          if (hours >=22) {
            image.src = 'images/nightClouds.png';
          } else {
            image.src = 'images/cloud.png';
          }          break;
        case 'Haze':
          image.src = 'images/mist.png';
          break;
        default:
          image.src = '';
      }
    
      
    } )
    .catch(error => console.log('error', error));
    
    document.getElementById("InputCity").value=null;
    
    

    

}



